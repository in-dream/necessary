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
  vite: {
    ssr: {
      noExternal: ['@domchristie/turn'],
    },
    server: {
      proxy: {
        '/api/music': {
          target: 'https://music.163.com/api/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/music/, ''),
        },
      },
    },
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
