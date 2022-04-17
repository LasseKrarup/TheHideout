const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
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
      },
      height: {
        "160": "40rem",
        "192": "48rem"
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
