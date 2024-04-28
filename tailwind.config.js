/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        Brown: '#958653',
        Blue: {
          '400': '#1EBAFF',
          '500': '#1582B6'
        },
        Orange: '#FFA000',
        Yellow: {
          '50': '#FFFBEB',
          '100': '#FDF1C8',
          '200': '#FBE28C',
          '300': '#F9D259',
        },
        Red: '#E55A5B',
      },

      fontFamily: {
        'sans': ['"ReemKufiBold"', ...defaultTheme.fontFamily.sans],
        '400': '"ReemKufiRegular"',
        '500': '"ReemKufiMedium"',
        '600': '"ReemKufiSemibold"',
        '700': '"ReemKufiBold"',
      },
    },
  },
  plugins: [],
}

