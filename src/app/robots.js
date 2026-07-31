export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://prinkal-code.netlify.app/sitemap.xml",
  };
}