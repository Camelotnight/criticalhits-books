import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://books.criticalhits.net',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
