module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans' ],
      },
    },
   
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'slate': '#636363',
  },
},
  plugins: [],
}
