/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Libre Baskerville', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
       },
    },
  },
  plugins: [],
}