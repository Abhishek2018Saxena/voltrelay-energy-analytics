/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b16',
          900: '#0a0f1e',
          850: '#0d1325',
          800: '#111831',
          750: '#16203a',
          700: '#1c2845',
          600: '#243358',
          500: '#2d3f6b',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          teal: '#14b8a6',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          violet: '#8b5cf6',
          sky: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)',
        glow: '0 0 20px rgba(59,130,246,0.15)',
      },
    },
  },
  plugins: [],
};
