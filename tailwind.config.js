/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "dist/JS/main.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
