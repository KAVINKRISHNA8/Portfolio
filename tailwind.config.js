/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: {
          canvas: '#fbf9f5',
          sub: '#f5f0e8',
          card: '#ffffff',
          cardWarm: '#f8f4ee',
          border: '#e8dfd5',
          borderDark: '#ded3c6',
          latte: '#c5b19e',
          taupe: '#8c7b6c',
          espresso: '#1f1c19',
          muted: '#5c544d',
          stone: '#8c8278',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'nude-sm': '0 2px 8px -2px rgba(92, 84, 77, 0.06)',
        'nude-md': '0 8px 24px -4px rgba(92, 84, 77, 0.08)',
        'nude-lg': '0 16px 36px -6px rgba(92, 84, 77, 0.10)',
        'glow-nude': '0 0 35px -5px rgba(197, 177, 158, 0.35)',
      },
    },
  },
  plugins: [],
}
