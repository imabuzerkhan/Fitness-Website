/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('..assets/img/hero/hero-1.jpg')",
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
    
    },
  },
  plugins: [],
}
