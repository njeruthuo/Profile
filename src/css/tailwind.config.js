/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: "hsl(0, 0%, 20%)",
        offBlack: "hsl(0, 0%, 8%)",
        darkGrey: "hsl(0, 0%, 12%)",
        greenLight: "hsl(75, 94%, 57%)",
      },
    },
  },
  plugins: [],
};
