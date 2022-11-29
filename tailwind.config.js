/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
