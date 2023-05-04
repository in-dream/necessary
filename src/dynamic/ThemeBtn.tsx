import { InvertMode } from '@vicons/ionicons5';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const changeTheme = (theme: string) => {
      currentTheme.value = theme;
      localStorage.setItem('theme', theme);
      setTheme(theme);
    };

    const setTheme = (theme: string) => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    };

    const getTheme = (): string => {
      const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || (prefersDarkMode ? 'dark' : 'light');
    };
    const currentTheme = ref(getTheme());

  
    onMounted(() => {
      setTheme(currentTheme.value);
    });

    return () => (
      <div
        class={`cursor-pointer transition transform ${
          currentTheme.value === 'light' ? '' : 'rotate-180'
        } text-slate-500 dark:text-slate-400`}
        onClick={() => changeTheme(currentTheme.value === 'light' ? 'dark' : 'light')}
      >
        <InvertMode class="w-6" />
      </div>
    );
  },
});
