/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mygray: "#b2b7be",
      },
    },
  },
  plugins: [require("daisyui")],
};
