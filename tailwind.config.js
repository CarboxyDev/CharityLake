/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Helvetica", "Sans-serif"],
        lato: ["Lato", "Arial", "Helvetica"],
        eudoxus: ["Eudoxus Sans", "Helvetica", "Arial"],
      },
      colors: {
        blue: "#387aff",
        gray: "#848c90",
        dark: "#25353d",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
