/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        exit: 'fade-out-up 0.3s cubic-bezier(0.65, 0.05, 0.35, 1) forwards',
        enter: 'fade-in-up 0.6s cubic-bezier(0.65, 0.05, 0.35, 1) forwards',
      },
      keyframes: {
        'fade-out-up': {
          /* … */
        },
        'fade-in-up': {
          /* … */
        },
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
