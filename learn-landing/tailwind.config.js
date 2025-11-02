/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        charcoal: "#0f1115",
        cream: "#f5f3ed",
        moss: "#3c4f3b",
        accent: "#f2b705",
      },
      boxShadow: {
        glow: "0 0 45px rgba(242, 183, 5, 0.35)",
      },
    },
  },
  plugins: [],
}
