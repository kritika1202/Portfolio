/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          900: '#0b0b18',
          800: '#111127',
          700: '#17173a',
          600: '#1e1e4a',
        },
        brand: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: '#e879f9',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,92,246,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(139,92,246,0.7)' },
        },
        typewriter: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
      },
      animation: {
        float:      'float 2.2s ease-in-out infinite',
        blink:      'blink 1s step-end infinite',
        shimmer:    'shimmer 2.5s linear infinite',
        fadeInUp:   'fadeInUp 0.7s ease forwards',
        slideInLeft:'slideInLeft 0.7s ease forwards',
        glowPulse:  'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

