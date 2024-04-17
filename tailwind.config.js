// tailwind.config.js
const {nextui} = require('@nextui-org/react');
import keepPreset from "keep-react/preset";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      // Aquí defines tu defaultTheme
      defaultTheme: 'light',
      fontFamily: {
        /*sans: ['Inter var', ...defaultTheme.fontFamily.sans],*/
        sans: ['Inter var', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    },
  },
  plugins: [nextui(), require('tailwindcss-animated'), require("daisyui")],
};

