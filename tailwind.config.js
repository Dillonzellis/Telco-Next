/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandingBlue: {
          400: "rgb(0, 101, 163)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["jubilat", "serif"],
      },
    },
  },
  plugins: [],
};
