/** @type {import('tailwindcss').Config} */
const _daisy = require("daisyui");
const daisyPlugin = _daisy && _daisy.default ? _daisy.default : _daisy;

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyPlugin],
  daisyui: {
    themes: ["light", "dark"],
  },
};
