/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: ['Rajdhani', 'sans-serif'],
      sans: ['Barlow', 'sans-serif'],
    },
    screens: {
      xxl: {
        max: '1600px',
      },

      xl: { max: '1200px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1000px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '850px' },
      // => @media (max-width: 850px) { ... }

      ssm: { max: '650px' },
      // => @media (max-width: 650px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('../images/hero.webp')",
        small: "url('../images/hero-small.webp)",
      },

      colors: {
        'dark-grey': '#212226',
        'medium-grey': '#363940',
        'light-grey': '#626773',
      },
    },
  },
  plugins: [],
};
