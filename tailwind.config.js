const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1350px",
    },
    extend: {
      colors: {
        brandingBlue: {
          400: "rgb(0, 101, 163)",
        },
        brandingGreen: {
          400: "rgb(115, 168, 0)",
        },
        brandingGrey: {
          700: "rgb(64, 64, 64)",
        },
      },
      fontFamily: {
        sans: ["var(--mont-font)", ...fontFamily.sans],
        serif: ["var(--crimson-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
