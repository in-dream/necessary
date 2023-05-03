import type { App } from "vue";
import { createI18n } from "vue-i18n";
import zh from "@i18n/zh.json";
import en from "@i18n/en.json";
export const I18n = createI18n({
  locale: "zh",
  messages: {
    zh,
    en,
  },
  globalInjection:true,
  legacy:false,
});

export default (app: App) => {
  app.use(I18n);
};
