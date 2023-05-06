import { atom } from 'nanostores';

export const themeStore = atom<string>('light');

export const getTheme = () => {
  const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  return savedTheme || (prefersDarkMode ? 'dark' : 'light');
};
export const setTheme = (theme: string) => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
};
export const changeTheme = (theme: string) => {
  themeStore.set(theme);
  localStorage.setItem('theme', theme);
  setTheme(theme);
};
export const onInit = () => {
  const theme = getTheme();
  changeTheme(theme)
};
export const toggleTheme = () => {
  changeTheme(themeStore.get() === 'light' ? 'dark' : 'light');
};
