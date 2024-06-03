/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'stone-gray': '#3A3A3E',
        'background-base' : '#242428',
        'yellow-theme': '#FFDD95'
      },
      width: {
        'custom-1300': '1300px',
      },
      screens: {
        'custom-1300': '1300px',
      },
    },
  },
  plugins: [],
}