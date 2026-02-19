import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const projects = await getCollection('projects');

  const items = [
    ...blog.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/blog/${entry.id.replace(/\.md$/, '')}`,
      categories: entry.data.categories ?? [],
    })),
    ...projects.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/projects/${entry.id.replace(/\.md$/, '')}`,
      categories: entry.data.stack ?? [],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Muhammad Firas',
    description: 'Blog posts and projects by Muhammad Firas.',
    site: context.site,
    items,
    customData: '<language>en-us</language>',
  });
}
