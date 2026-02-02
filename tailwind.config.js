/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        peach: {
          bg: '#FFF5F0',
          bgLight: '#FFF7F2',
          text: '#4A3835',
          accent: '#C97A63',
          gradStart: '#FFEBE3',
          gradEnd: '#FFE0D4',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}
