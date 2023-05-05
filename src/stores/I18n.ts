import { atom } from 'nanostores';
import { I18n } from '@utils/vue.entry';
const { locale } = I18n.global;

export const localE = atom<string>('');

export const changeLocale = () => {
  const newLocale = locale.value === 'en' ? 'zh' : 'en';
  setLang(newLocale);
};
export const setLang = (lang: string) => {
  document.documentElement.lang = lang;
  localStorage.setItem('locale', lang);
  locale.value = lang;
  localE.set(lang);
};
export const getLang = () => {
  const docLang = document.documentElement.lang;
  const savedLang = localStorage.getItem('locale');
  return savedLang || (docLang === 'zh' ? 'zh' : 'en');
};
export const onInit = () => {
  const lang = getLang();
  setLang(lang);
};
