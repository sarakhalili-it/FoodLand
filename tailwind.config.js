/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        black10: "#0000001a",
        black60: "#00000099",
        secondery: "#FF7426",
        primary: "#E7FAFE",
        primary50: "#e7fafe7d",
      },
      fontFamily: {
        lobester: ["lobester", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.5rem",
        "36px": "2.25rem",
      },
      spacing: {
        400: "25rem",
        600: "37rem",
        368: "23rem",
        "960px": "60rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
