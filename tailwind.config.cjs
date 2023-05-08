/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      keyframes: {
        'left-show': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        'left-show': 'left-show',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
