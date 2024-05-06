/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xxl: "32px",
      md: "40px",
      lg: "88.24px",

    },
    extend: {
      colors: {
        offgray: '#d1d0d1'
      },
      backgroundImage: {
        bordergradient: "linear-gradient(149.31deg, #AE00FF 28.09%, rgba(5, 0, 255, 0.35) 81.38%)"
      },
      lineHeight: {
        '46': '46px',
        '48': '48px',
        '60': '60px',
        '107': '107.57px'

      },
      Rounded: {
        'xxl': '400px',

      },
    },
    plugins: [],
  }
}

// 88.24px
// Line height
// 107.57px