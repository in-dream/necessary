import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000/',
  output: 'server',
  vite:{
    ssr:{
      noExternal: ['@domchristie/turn'],
    }
  },
  integrations: [
    mdx(),
    sitemap(),
    vue({
      jsx: true,
      appEntrypoint: '/src/utils/vue.entry.ts',
    }),
    tailwind(),
  ],
  adapter: node({
    mode: 'standalone',
  }),
});
