const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  darkMode: "class",
  plugins: [nextui({ addCommonColors: true })],
};
