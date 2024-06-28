/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'xs': {'min':"1px" ,"max":"481px"},
       
      },
    },
  },
  plugins: [],
}

