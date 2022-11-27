/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "Arial"],
        eudoxus: ["Eudoxus-Sans", "Helvetica", "Arial"],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    prefix:"dui-"
  }
};
