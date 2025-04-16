/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C3CE9',
        secondary: '#9B7AE6',
        light: '#F5F5F7',
      },
    },
  },
  plugins: [],
}
