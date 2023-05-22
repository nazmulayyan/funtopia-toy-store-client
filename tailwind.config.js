/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],

}

