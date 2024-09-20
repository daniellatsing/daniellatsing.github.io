/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx, mjs}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,mjs}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        'white': '#fefefe',
        'white-two': '#fbfbfd',
        'anti-flash-white': '##e2e2e2',
        'reseda-green': '#627a60',
        'french-gray': '#d9d9d9',
        'silver': '#b9b9b9',
        'paynes-gray': '#576978',
        'night': '#0b100d',
        'davys-grey': '#4e4e4e',
        'ash-gray': '#a4d4d4'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

