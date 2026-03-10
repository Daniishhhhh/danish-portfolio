/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { jakarta: ['"Plus Jakarta Sans"', 'sans-serif'] },
      colors: {
        purple: { 500: '#D946EF', 600: '#C026D3' },
        gold: '#FBBF24',
        pink: '#EC4899',
      }
    },
  },
  plugins: [],
}
