
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'serif'],
      },
      colors: {
        'electric-blue': '#007BFF',
        'light-gray': '#F4F5F7',
        'bright-yellow': '#FFD200',
        'graphite': '#1C1C1C',
      },
    },
  },
  plugins: [],
} satisfies Config
