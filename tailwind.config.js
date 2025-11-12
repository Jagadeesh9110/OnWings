/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007B00',     // Bright blue
        'secondary': '#FFD700',   // Sunny yellow
        'accent': '#28A745',      // Bright green
        'background': '#F8F9FA',  // Clean light gray
        'text': '#333333',
        'text-light': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Your default font
        outfit: ['Outfit', 'sans-serif'], // Your new font
      }
    },
  },
  plugins: [],
}


