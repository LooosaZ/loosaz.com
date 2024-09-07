import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://looosaz.github.io",
    integrations: [sitemap(), svelte(), mdx()],
    output: "hybrid",
    vite: {
        build: {
            sourcemap: true
        }
    },
    markdown: {
        syntaxHighlight: "prism"
    },
});
