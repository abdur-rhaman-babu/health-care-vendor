/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "4rem",
    },
    extend: {
      colors: {
        primary: "#058789",
        secondary: "#F59E0B",
        accent: "#10B981",
      },
    },
  },
  plugins: [require("daisyui")],
};
