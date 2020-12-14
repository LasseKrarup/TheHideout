const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono
        ],
        heading: ["Major Mono Display", ...defaultTheme.fontFamily.sans]
      },
      borderWidth: {
        "16": "16px",
        "32": "32px"
      },
      screens: {
        "xs": "375px"
      }
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      borderWidth: ["last"]
    },
  },
  plugins: [],
}
