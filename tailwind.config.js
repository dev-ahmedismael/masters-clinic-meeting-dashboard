/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: { primary: "#facc15", secondary: "#fde047" },
    },
  },
  plugins: [],
};
