/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        '38px':'38px',
      },
      screens:{
        'xs':'400px',
      },
      fontFamily:{
        sans :['Monserrat','sans-serif'],
      },
      fontSize:{
        'custom-32':'32px',
      },
      colors: {
        'custom-active': '#34D399',
      },
    },
  },
  variants: {
    extend: {
      backgroungColor: ['active'],
    },
  },
  plugins: [],
}

