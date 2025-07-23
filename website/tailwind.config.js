/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#4a5568',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        surface: {
          DEFAULT: '#f8fafc',
        },
        border: {
          DEFAULT: '#e2e8f0',
        },
        success: {
          DEFAULT: '#10b981',
        },
        warning: {
          DEFAULT: '#f59e0b',
        },
        error: {
          DEFAULT: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
} 