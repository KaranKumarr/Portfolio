module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBell: {
          50: '#cdc7e5',
          100: '#b8b1db',
          200: '#a49ad0',
          300: '#9A8FCB',
          400: '#5D4CAC',
          500: '#341F97',
          600: '#24166A',
          700: '#1A104C',
        }
      }
    },
    fontFamily: {
      'serif': ['Rokkitt', 'serif', 'Georgia']
    }
  },

  plugins: [],
}