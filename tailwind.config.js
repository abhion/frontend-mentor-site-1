const defaultColors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts}'],
  theme: {
    colors:{
      ...defaultColors,
      "soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",
      "off-white": "hsl(36, 100%, 99%)" ,
      "gray-blue": "hsl(236, 13%, 42%)",
      "dark-blue": "hsl(240, 100%, 5%)",
    },
    screens:{
      'sm': '375px',
      'lg': '1440px'
    },
    extend: {},
  },
  plugins: [],
}

