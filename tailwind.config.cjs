/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "linear-rolling": {
          "0%": { transform: "translateX(0%)" },
          "20%": { transform: "translateX(150%)" },
          "50%": { transform: "translateX(0%)" },
          "75%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "linear-rolling": "linear-rolling",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: "class",
};
