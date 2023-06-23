/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"], //take every javascript and jsx files and analyze it from src and its subdirectories 
  mode:"jit", //just in time configuration 
  theme: {
    extend: {
      colors:{
        primary:"#E6BCB3",
        secondary:"",
        tertirary:"",

      },
     screens:{
        xs:"450px"
      }
    },
  },
  plugins: [],
}

