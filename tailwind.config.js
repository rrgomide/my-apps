/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],

  darkMode: 'class',

  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: ['light', 'dark'],
  },
}
