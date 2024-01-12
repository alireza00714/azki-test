/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#25B79B",
        "dark-primary": "#1c8a75",
      },
    },
  },
  plugins: [],
};
