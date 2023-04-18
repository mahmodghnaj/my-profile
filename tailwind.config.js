/** @type {import('tailwindcss').Config} */
const withOpacity = (name) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined)
      return `rgb(var(${name}))`
    return `rgba(var(${name}),${opacityValue})`

  }
}
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ccprimary': withOpacity('--ccprimary'),
      }
    },
  },
  plugins: [],
}
