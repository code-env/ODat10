/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

