/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xsm': '350px',
      
      's3': "375px",

      's2': "400px",

      's1': "500px",

      'sm': "640px",

      'md': "768px",

      'md2': '899px',

      'lg': "1024px",

      'xl': "1280px",

      "1xl": "1440px",

      "2xl": "1536px",

    }
  },
  plugins: [],
}