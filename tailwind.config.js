/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#9763FF',
        secondary: '#EAE0FF',
        grey: '#C1C3C6',
        lightGrey: '#E6E6E6'
      }
    },
  },
  plugins: [],
  
}

