/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'page': '8.5in'
      },
      height: {
        'page': '11in'
      }

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
