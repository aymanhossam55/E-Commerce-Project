/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '20vh': '20vh',
      },
    colors: {
      'text-yellow': '#ffcb73',
      'text-footer': '#ffb840',
      'hover-white': '#ffffff',
      'text-dark': '#101610',
      'dark-btn': '#101610',
      'disable-btn': '#878a87',
      'dark-bg': '#101610',
      'grey-bg': '#eeeeee',
      'grey-input': '#dedede',
      'dark-input': '#101610',
    },
      spacing: {
        'm': '0.5rem',
        'l': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '8xl': '8rem',
        '12xl': '12rem',
      },
      borderRadius: {
        '2xl': '2rem',
        '4xl': '4rem',
      },
      screens: {
        'sm': {'min': '250px', 'max': '567px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '568px', 'max': '767px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '768px', 'max': '1280px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1281px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        // '2xl': {'min': '1536px'},
        // // => @media (min-width: 1536px) { ... }
      },
  },
  }
}

