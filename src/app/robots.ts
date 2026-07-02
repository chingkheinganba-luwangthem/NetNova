import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/pricing", "/api/", "/_next/", "/static/"],
    },
    sitemap: "https://netnova.in/sitemap.xml",
    host: "https://netnova.in",
  };
}
