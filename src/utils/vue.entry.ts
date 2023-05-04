import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import messages from '@intlify/unplugin-vue-i18n/messages';
const pinia = createPinia();
export const I18n = createI18n({
  locale: 'en',
  messages,
  globalInjection: true,
  legacy: false,
});

export default (app: App) => {
  app.use(I18n);
  app.use(pinia);
};
