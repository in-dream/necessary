import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000/',
  output: 'server',
  vite: {
    plugins: [
      VueI18nPlugin({
        include: ['./src/i18n/**'],
      }),
    ],
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
      ],
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
