import plugin from 'tailwindcss/plugin'; 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      // --- ADD THIS textShadow THEME ---
      textShadow: {
        'aurora': '0 0 8px rgb(52 211 153 / 0.8), 0 0 20px rgb(52 211 153 / 0.4)',
      },
    },
  },
  // --- MODIFIED PLUGINS ARRAY ---
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.text-shadow-aurora': {
          textShadow: theme('textShadow.aurora'),
        },
      });
    }),
   tailwindcss(), react()
  ],
}