/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-primary': 'var(--bg-primary)',
      },
      textColor: {
        'text-primary': 'var(--text-primary)',
      },
    },
  },
  plugins: [],
}

