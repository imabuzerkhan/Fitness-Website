/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 10px 5px rgba(0, 0, 0, 0.1)', // Custom shadow
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero/hero-1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

