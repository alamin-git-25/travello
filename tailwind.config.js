/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#E97458",
          "neutral": "#F9EC7D",
          "neutral2": "#F5B100",
          "base-100": "#0C111F",
          "base-200": "#E5E5E5",
          "base-300": "#2F6081"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  
  plugins: [require('daisyui'),],

}

