/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-mobile': "url('../src/assets/home/background-home-mobile.jpg')",
        'main-tablet': "url('../src/assets/home/background-home-tablet.jpg')",
        'main-desktop': "url('../src/assets/home/background-home-desktop.jpg')",

        'destination-mobile':
          "url('../src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('../src/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop':
          "url('../src/assets/destination/background-destination-desktop.jpg')",

        'crew-mobile': "url('../src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('../src/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('../src/assets/crew/background-crew-desktop.jpg')",

        'tech-mobile':
          "url('../src/assets/technology/background-technology-mobile.jpg')",
        'tech-tablet':
          "url('../src/assets/technology/background-technology-tablet.jpg')",
        'tech-desktop':
          "url('../src/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
        Bellafair: ['Bellafair', 'serif'],
      },

      colors: {
        navigationBar: '#979797',
        black: '#0B0D17',
        customblue: '#D0D6F9',
      },
    },
  },
  plugins: [],
};
