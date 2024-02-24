import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), svelte(), sentry(), spotlightjs()],
  output: "server",
  adapter: vercel(),
  server: {
    port: 3000
  }
});