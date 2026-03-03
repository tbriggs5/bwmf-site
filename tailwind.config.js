/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      charcoal: "#1C1C1C",
      forest: "#2F4F3E",
      parchment: "#F7F7F5",
    },
    letterSpacing: {
      wider: ".15em",
    },
  },
},
  plugins: [],
};
