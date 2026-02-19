export function GET({ site }) {
  const base = site ? site.toString().replace(/\/$/, "") : "http://localhost:4321";
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${base}/sitemap-index.xml`,
    `Sitemap: ${base}/rss.xml`,
    `Sitemap: ${base}/llms.txt`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
