/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tag: {
          "lime-800": "#3f6212",
          "lime-900": "#365314",
          "lime-950": "#365314",
          "green-100": "#C9D7B8",
          "green-200": "#5A6D49",
          "green-300": "#151A11",
          "tan-100": "#F7F8F0",
          "gray-100": "#737373",
        },
      },
    },
  },
  plugins: [],
};
