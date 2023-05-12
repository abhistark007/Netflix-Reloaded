/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-one': "url('../src/assets/banner.jpg')",
        'banner-two': "url('../src/assets/banner2.jpg')",
      }
    },
  },
  plugins: [],
}

