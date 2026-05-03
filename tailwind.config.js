// tailwind.config.js
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: '#071226',
        bgDeepGradient: '#081528',
        cardDeep: '#0b1220',
        cardLight: '#111',
        muted: '#94a3b8',
        accentCyan: '#00d1ff',
        accentOrange: '#ff6a00',
        accentOrangeLight: '#ff9d00',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}