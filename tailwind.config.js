/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azure1: "#0172AF",
        azure2: "#74FEBD",
        primary: "#D6517C",
      },
      fontFamily: {
        parkinsans: ["Parkinsans", "Nunitos Sans", "monospace"],
      },
    },
  },
  plugins: [],
};
