const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono
        ],
        heading: ["Major Mono Display", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {
      margin: ["last"]
    },
  },
  plugins: [],
}
