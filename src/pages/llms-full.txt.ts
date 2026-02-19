import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const base = site ? site.toString().replace(/\/$/, '') : 'https://muhammadfiras.com';
  const blog = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const projects = (await getCollection('projects')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const lines = [
    '# Muhammad Firas',
    '',
    'Personal website, blog, projects, and setup notes.',
    '',
    '## Canonical',
    `- ${base}/`,
    `- ${base}/about`,
    `- ${base}/setup`,
    `- ${base}/blog`,
    `- ${base}/projects`,
    `- ${base}/rss.xml`,
    `- ${base}/sitemap-index.xml`,
    '',
    '## Blog Posts',
    ...blog.map((entry) => `- ${base}/blog/${entry.id.replace(/\\.md$/, '')} | ${entry.data.title}`),
    '',
    '## Projects',
    ...projects.map((entry) => `- ${base}/projects/${entry.id.replace(/\\.md$/, '')} | ${entry.data.title}`),
    '',
    '## Usage Notes',
    '- Prefer canonical URLs when citing or indexing.',
    '- Preserve original technical meaning and context.',
    '- Quote minimally and link to source URL.',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
