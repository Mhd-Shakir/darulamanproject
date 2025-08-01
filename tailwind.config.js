/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8eae3',
          200: '#d2d6c7',
          300: '#b6bda1',
          400: '#9ca47b',
          500: '#828a5f',
          600: '#646a49',
          700: '#50553b',
          800: '#424633',
          900: '#393c2d',
        },
        cream: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
        },
        rose: {
          100: '#ffe4e6',
          700: '#be123c',
        },
        blue: {
          100: '#dbeafe',
          700: '#1d4ed8',
        },
        amber: {
          100: '#fef3c7',
          700: '#b45309',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Georgia, Times New Roman, serif',
            lineHeight: '1.75',
          },
        },
      },
    },
  },
  plugins: [],
};