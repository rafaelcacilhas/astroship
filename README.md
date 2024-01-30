This is the AstroShip with the output as server on astro.config. Trying to deploy it on vercel does not work
https://astroship-self-sigma.vercel.app/



import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'server',
  adapter: vercel()
});
