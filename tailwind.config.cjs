/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-mobile': "url('./src/assets/home/background-home-mobile.jpg')",
        'main-tablet': "url('./src/assets/home/background-home-tablet.jpg')",
        'main-desktop': "url('./src/assets/home/background-home-desktop.jpg')",
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
        Bellafair: ['Bellafair', 'serif'],
      },
    },
  },
  plugins: [],
};
