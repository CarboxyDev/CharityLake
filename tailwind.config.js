/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter var", "Helvetica", "Sans-serif"],
        lato: ["Lato", "Arial", "Helvetica"],
        eudoxus: ["Eudoxus Sans", "Helvetica", "Arial"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
