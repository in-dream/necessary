import { defineComponent, onMounted, ref, watch } from 'vue';
import { Language } from '@vicons/ionicons5';
import { I18n } from '@utils/vue.entry';

export default defineComponent({
  setup() {
    const { locale } = I18n.global;

    const setLang = (lang: string) => {
      document.documentElement.lang = lang;
      localStorage.setItem('locale', lang);
      locale.value = lang;
    };
    const changeLocale = () => {
      const newLocale = locale.value === 'en' ? 'zh' : 'en';
      setLang(newLocale);
    };

    const getLang = (): string => {
      const docLang = document.documentElement.lang;
      const savedLang = localStorage.getItem('locale');
      return savedLang || (docLang ? 'zh' : 'en');
    };

    

    return () => (
      <div class="text-slate-500 dark:text-slate-400 cursor-pointer" onClick={changeLocale}>
        {/* {locale.value} */}
        <Language class="w-6" />
      </div>
    );
  },
});
