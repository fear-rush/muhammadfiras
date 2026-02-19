// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';

function rehypeMarkdownImageDefaults() {
	const sizeCache = new Map();

	return (tree) => {
		const visit = (node) => {
			if (!node || typeof node !== 'object') return;
			if (node.type === 'element' && node.tagName === 'img') {
				node.properties ||= {};
				if (!('loading' in node.properties)) node.properties.loading = 'lazy';
				if (!('decoding' in node.properties)) node.properties.decoding = 'async';
				if (!('fetchpriority' in node.properties)) node.properties.fetchpriority = 'low';

				const src = node.properties.src;
				if (
					typeof src === 'string' &&
					src.startsWith('/') &&
					!src.startsWith('//') &&
					!('width' in node.properties) &&
					!('height' in node.properties)
				) {
					try {
						let dimensions = sizeCache.get(src);
						if (!dimensions) {
							const absolutePath = path.join(process.cwd(), 'public', src.slice(1));
							const fileBuffer = fs.readFileSync(absolutePath);
							dimensions = imageSize(fileBuffer);
							sizeCache.set(src, dimensions);
						}
						if (dimensions.width && dimensions.height) {
							node.properties.width = dimensions.width;
							node.properties.height = dimensions.height;
						}
					} catch {
						// Keep markdown rendering resilient if image metadata lookup fails.
					}
				}
			}
			if (Array.isArray(node.children)) {
				for (const child of node.children) visit(child);
			}
		};
		visit(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',
	integrations: [sitemap()],
	markdown: {
		rehypePlugins: [rehypeMarkdownImageDefaults],
	},
});
