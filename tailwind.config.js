const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cxgreen: {
          light: '#6FB98F',
          DEFAULT: '#2C7873',
          dark: '#004445'
        },
        cxdark: '#021C1E',
        cxred: '#802A30'
      },
      boxShadow: {
        'cx-dark': '0 7px 10px 5px #004445'
      },
    }, 
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
