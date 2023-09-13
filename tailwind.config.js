/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        brightYellow: 'hsl(51, 100%, 49%)',
        darkCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        footerCyan: 'hsl(168, 34%, 41%)',
        white: 'hsl(0, 0%, 100%)',
        desaturatedBlue: 'hsl(212, 27%, 19%)',
        grayishBlue: 'hsl(213, 9%, 39%)',
        grayishWhite: 'hsl(210, 4%, 67%)',
      },
    },
  },
  plugins: [],
};
