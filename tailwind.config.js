/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'space-black': '#050505',
        'space-gray': '#121212',
        'glass-gray': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'neon-blue': '#00f0ff',
      },
      backgroundImage: {
        'mesh-hero': 'radial-gradient(circle at center, hsla(189, 100%, 50%, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
