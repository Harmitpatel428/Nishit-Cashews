/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#10100E',
        cocoa: '#251914',
        cream: '#E7D2AA',
        ivory: '#F5F0E7',
        bronze: '#855C35',
        green: '#455542',
        sand: '#B9A98B',
        gold: '#C49A52',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 11vw, 11rem)',
        'section': 'clamp(3rem, 7vw, 7rem)',
        'metric': 'clamp(4rem, 9vw, 9rem)',
      },
      spacing: {
        'section': 'clamp(96px, 12vw, 220px)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '18px',
        'xl': '32px',
      },
      easing: {
        'expo': 'cubic-bezier(.16, 1, .3, 1)',
      },
    },
  },
  plugins: [],
}
