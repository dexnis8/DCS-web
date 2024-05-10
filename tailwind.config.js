/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#e7f6ff",
          500: "#008bc8",
          800: "#016798",
          700: "#015182",
          courses: "#bbddff",
        },
        grey: {
          500: "#666666",
          600: "#888888",
        },
        red: {
          300: "#EE4691",
        },
      },
    },
  },
  plugins: [],
};
