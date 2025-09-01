/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF7F2',
          100: '#F5EFE7',
          200: '#E8D5C4',
          300: '#D4B896',
          400: '#C1956B',
          500: '#A67C52',
          600: '#8B6332',
          700: '#6B4E26',
          800: '#4A3518',
          900: '#2D1F0E',
          950: '#1A120A',
        },
        secondary: {
          50: '#F9F7F4',
          100: '#F0EBE3',
          200: '#DDD2C0',
          300: '#C5B299',
          400: '#A8926F',
          500: '#8C7851',
          600: '#6F5F3F',
          700: '#544732',
          800: '#3A3225',
          900: '#261F18',
          950: '#16120E',
        },
        accent: {
          50: '#FDF9F3',
          100: '#F9F0E4',
          200: '#F0DCC2',
          300: '#E4C29A',
          400: '#D4A574',
          500: '#C08A56',
          600: '#A0703F',
          700: '#7D5830',
          800: '#5A3F22',
          900: '#3B2A17',
          950: '#22180E',
        },
        success: {
          50: '#F6F5F2',
          100: '#EDE8DF',
          500: '#7D6F47',
          700: '#5A4F33',
        },
        warning: {
          50: '#FDF8F0',
          500: '#D4A574',
          700: '#A0703F',
        },
        error: {
          50: '#FBF4F2',
          500: '#C17A6B',
          700: '#A0534A',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};