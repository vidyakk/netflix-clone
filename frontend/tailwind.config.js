module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          dark: '#0f0f0f',
          black: '#000000',
          gray: '#221f1f',
        }
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
