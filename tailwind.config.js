/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'main': '0px 2px 4px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
