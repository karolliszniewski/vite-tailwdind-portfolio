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
    },
  },
  plugins: [],
}