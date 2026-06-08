export function GET() {
  return new Response(
`User-agent: *
Allow: /

Sitemap: https://chiffr-devis.fr/sitemap-index.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
}