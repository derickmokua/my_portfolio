module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe080',
          300: '#ffd44d',
          400: '#ffc71a',
          500: '#e6b000', // Main gold
          600: '#b38900',
          700: '#806200',
          800: '#4d3b00',
          900: '#1a1400',
        },
      },
    },
  },
  plugins: [],
}