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
      backgroundImage: {
        "404-image": "url('/statics/error/404.avif')",
        "500-image": "url('/statics/error/500.avif')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ addCommonColors: true })],
};
