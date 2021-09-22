const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.5 },
    { url: "/all-events", changefreq: "daily", priority: 0.3 },
    { url: "/all-posts", changefreq: "daily", priority: 0.3 },
    { url: "/all-previous", changefreq: "daily", priority: 0.3 },
    { url: "/refunds", changefreq: "monthly", priority: 0.1 },
    { url: "/payment-confirmation", changefreq: "monthly", priority: 0.1 },
    { url: "/payment-error", changefreq: "monthly", priority: 0.1 },
    { url: "/privacy", changefreq: "monthly", priority: 0.1 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};