/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Orbitron: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        HeroImage: "url('/src/assets/HeroImage.png')",
      },
    },
  },
  plugins: [],
};
