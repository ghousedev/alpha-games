module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '1500': 1500
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
