module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4600DA',
        'secondary': '#FF8024',
        'sticky': '#62E833',  //sticky header
        'dark': '#000000',
        'border': '#D9D9D9',

      },
      fontFamily: {
        'mont': ['Mont', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}