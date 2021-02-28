module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      lg: '2px 2px 20px #00000028;',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
