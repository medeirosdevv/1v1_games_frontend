/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'neon-green': 'var(--neon-green)',
      },
      animation: {
        'neon': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'glitch': 'cyber-glitch 1s infinite linear alternate-reverse',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

