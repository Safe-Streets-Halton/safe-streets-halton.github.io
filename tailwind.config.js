/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js, md}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#447A38'
      },
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [],
};
