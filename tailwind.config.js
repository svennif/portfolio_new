/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'midnight': '#1e293b',
      'highlight': '#71a1ef',
      'accent': '#2a3a52',
      'accent-2': '#3c5376'
    },
    extend: {},
  },
  plugins: [],
}