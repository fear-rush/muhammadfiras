export function GET({ site }) {
  const base = site ? site.toString().replace(/\/$/, "") : "https://muhammadfiras.com";
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Host: ${base.replace(/^https?:\/\//, "")}`,
    "",
    `Sitemap: ${base}/sitemap-index.xml`,
    `Sitemap: ${base}/rss.xml`,
    "",
    `# LLM discovery: ${base}/llms.txt`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
