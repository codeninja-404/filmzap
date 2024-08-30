/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "h-sm": { raw: "(max-height: 767px)" }, // Custom screen for short screens
        "h-md": { raw: "(min-height: 768px) and (max-height: 1023px)" }, // Custom screen for medium height screens
        "h-lg": { raw: "(min-height: 1024px)" }, // Custom screen for tall screens
      },
    },
  },
  plugins: [],
};
