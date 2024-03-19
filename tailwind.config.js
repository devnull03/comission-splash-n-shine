/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'AbhayaLibre': ['Abhaya Libre', 'serif'],
      },
      colors: {
        'primary': "#1D4438",
        'secondary': "#FBFADA",
      }
    },
  },
  plugins: [],
}

