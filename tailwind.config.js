/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  content: [],
  theme: {
    fontFamily: {
      'Jost': ['Jost', 'sans-serif'],
      'Varela': ['Varela Round', 'sans-serif'],
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
}

