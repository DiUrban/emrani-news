/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      plugins: [require("@tailwindcss/line-clamp")],
      screens: {
        xs: "380px", // min-width
      },
      colors: {
        primary: {
          DEFAULT: "hsl(225,80%,30%)",
          100: "hsl(225,15%,90%)",
          200: "hsl(225,30%,85%)",
          300: "hsl(225,30%,55%)",
          400: "hsl(225,35%,50%)",
          500: "hsl(225,60%,45%)",
          600: "hsl(225,65%,40%)",
          700: "hsl(225,70%,35%)",
          800: "hsl(225,75%,30%)",
          900: "hsl(225,80%,25%)",
          1000: "hsl(225,90%,10%)",
        },
      },
    },
  },
  plugins: [],
};
