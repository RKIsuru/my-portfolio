const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'san-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

