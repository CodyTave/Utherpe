/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Jeko'],
      'black':['Jeko'],
      'normal':['Jeko-Regular'],
      'extrabold':['Jeko-extrabold'],
      'bold':['Jeko-bold'],
    },
    extend: {

      screens:{
        'md':'820px',
        'xs':'450px',
        'xxs':'280px'
      },
      colors:{
        'gold':['#A9874B','#A38F6F'],
        'purple':'#DD7DFF',
        'pink':'#E962CD'
      },
      boxShadow:{
        'neo': '-10px 15px 0px rgba(0, 0, 0,1)',
        'neo2': '-5px 5px 0px rgba(0, 0, 0,1)',
        'neo3': '-6px 6px 0px rgba(0, 0, 0,1)',
        'neoH': '-8px 8px 0px rgba(0, 0, 0,1)',

      },
      borderWidth:{
        'st':'3px'
      },
    },
  },
  plugins: [],
}
