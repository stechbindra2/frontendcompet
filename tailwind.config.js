module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9c7ad6',
          DEFAULT: '#6d4ba3',
          dark: '#4a3372',
        },
        accent: {
          light: '#f5d17f',
          DEFAULT: '#e9b949',
          dark: '#c99a2e',
        },
        neutral: {
          light: '#f4f4f7',
          DEFAULT: '#e2e2e8',
          dark: '#44444f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
