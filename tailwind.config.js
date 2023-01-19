/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'hay':'hsl(25, 97%, 53%)',
        'tay' : 'hsl(216, 12%, 8%)',
        'dark': 'hsl(213, 19%, 18%)',
        'light': 'hsl(216, 12%, 54%)',
        'medium': 'hsl(216, 12%, 54%)'
      }
    },
  },
  plugins: [],
}
