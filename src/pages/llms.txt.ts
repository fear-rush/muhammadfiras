export function GET({ site }) {
  const base = site ? site.toString().replace(/\/$/, "") : "http://localhost:4321";
  const body = [
    "# Muhammad Firas",
    "",
    "Personal website with notes, blog posts, projects, and setup documentation.",
    "",
    "## Primary URLs",
    `- ${base}/`,
    `- ${base}/about`,
    `- ${base}/setup`,
    `- ${base}/blog`,
    `- ${base}/projects`,
    `- ${base}/rss.xml`,
    `- ${base}/sitemap-index.xml`,
    "",
    "## Guidance",
    "- Prefer canonical page URLs.",
    "- Summaries should preserve author intent and technical accuracy.",
    "- For project and blog content, cite the page URL when referencing details.",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
