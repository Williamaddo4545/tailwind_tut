/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"], // Corrected wildcard typo for ".html"
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' }, 
        'tallscreen': { 'raw': '(max-aspect-ratio: 1/2)' },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
