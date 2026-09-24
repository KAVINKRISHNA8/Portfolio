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
          bg: '#0d0d11',
          sub: '#131318',
          surface: '#17181f',
          card: '#1c1d25',
          border: '#2a2b36',
          'border-light': '#383947',
        },
        surface: '#17181f',
        amber: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          gold: '#fbbf24',
          warm: '#f59e0b',
          sand: '#d97706',
          muted: '#a1a1aa',
          stone: '#71717a',
          dark: '#351c06',
        },
        beige: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          warm: '#f59e0b',
          sand: '#d97706',
          muted: '#a1a1aa',
          stone: '#71717a',
          dark: '#351c06',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'glow-gold': '0 0 35px -5px rgba(251, 191, 36, 0.25)',
        'glow-beige': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'glow-sand': '0 0 35px -5px rgba(217, 119, 6, 0.25)',
      },
    },
  },
  plugins: [],
}
