/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For /app folder (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // If using /pages
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}", // For storybook
  ],
  darkMode: "class", // Important for theme toggle
  theme: {
    extend: {},
  },
  plugins: [],
}
