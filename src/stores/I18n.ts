import { defineStore } from 'pinia';
import { I18n } from '@utils/vue.entry';
const { locale } = I18n.global;

export const useI18nStore = defineStore('i18n-store', {
  state: () => ({ locale: 'zh' }),
  actions: {
    changeLocale() {
      const newLocale = locale.value === 'en' ? 'zh' : 'en';
      this.setLang(newLocale);
    },
    setLang(lang: string) {
      document.documentElement.lang = lang;
      localStorage.setItem('locale', lang);
      locale.value = lang;
    },
    getLang() {
      const docLang = document.documentElement.lang;
      const savedLang = localStorage.getItem('locale');
      return savedLang || (docLang === 'zh' ? 'zh' : 'en');
    },
    onInit() {
      this.locale = this.getLang();
      this.setLang(this.locale);
    },
    toggleLocale() {
      this.changeLocale();
    },
  },
});
