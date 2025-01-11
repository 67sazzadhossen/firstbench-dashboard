/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mygray: "#c5c9cf",
      },
    },
  },
  plugins: [require("daisyui")],
};
