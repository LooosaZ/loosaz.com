import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://loosaz.com",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
