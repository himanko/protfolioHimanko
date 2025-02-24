/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A2A2A',
        secondary: '#4F46E5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

