/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0c0c0b',
          sub: '#121210',
          surface: '#171715',
          card: '#1c1c19',
          border: '#2a2925',
          'border-light': '#383631',
        },
        surface: '#171715',
        beige: {
          light: '#f5f2eb',
          DEFAULT: '#e3dac9',
          warm: '#d4c5a9',
          sand: '#cbb994',
          muted: '#a6a095',
          stone: '#7d776c',
          dark: '#3d3830',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-beige': '0 0 35px -5px rgba(212, 197, 169, 0.25)',
        'glow-sand': '0 0 35px -5px rgba(203, 185, 148, 0.25)',
      },
    },
  },
  plugins: [],
}
