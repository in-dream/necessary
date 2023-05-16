import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme-store', {
  state: () => ({ theme: 'light' }),
  actions: {
    getTheme() {
      const prefersDarkMode = matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || (prefersDarkMode ? 'dark' : 'light');
    },
    setTheme(theme: string) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
      this.theme = theme;
    },

    onInit() {
      this.setTheme(this.getTheme());
    },
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light');
    },
  },
});
