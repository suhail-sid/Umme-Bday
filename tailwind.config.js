/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          light: '#fdfbf7',
          DEFAULT: '#faf6f0',
          dark: '#f3ece0',
        },
        blush: {
          light: '#fbebeb',
          DEFAULT: '#f3d1d1',
          dark: '#e5a9a9',
        },
        rose: {
          dusty: '#e09898',
          accent: '#d48888',
        },
        berry: {
          light: '#a15f69',
          DEFAULT: '#8f4f58',
          dark: '#6b313a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4s ease-in-out infinite',
        'flicker': 'flicker 1.5s infinite alternate',
        'smoke': 'smoke 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'confetti': 'confetti 3s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spinSlow 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.9' },
          '20%': { transform: 'scale(0.9) rotate(1deg)', opacity: '0.8' },
          '40%': { transform: 'scale(1.1) rotate(-0.5deg)', opacity: '1' },
          '60%': { transform: 'scale(0.95) rotate(0deg)', opacity: '0.85' },
          '80%': { transform: 'scale(1.05) rotate(0.5deg)', opacity: '0.95' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5', filter: 'blur(0px)' },
          '50%': { transform: 'translateY(-15px) scale(1.2)', opacity: '0.3', filter: 'blur(2px)' },
          '100%': { transform: 'translateY(-30px) scale(1.5)', opacity: '0', filter: 'blur(4px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(229, 169, 169, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(229, 169, 169, 0.8), 0 0 15px rgba(212, 175, 55, 0.4)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
