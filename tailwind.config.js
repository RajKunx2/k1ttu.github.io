/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        Lunasima:['Lunasima', "sans-serif"]
      },
    },
  },
  // theme: {
  //   fontFamily: {
  //     sans: ['"PT Sans"', 'sans-serif'],
           
  //   },
  //   extend: {},
  // },
  plugins: [],
}