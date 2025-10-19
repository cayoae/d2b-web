/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#8EEA44',
          50: '#F5FFF0',
          100: '#E8FFD9',
          200: '#D4FFB8',
          300: '#B8FF8F',
          400: '#9EF565',
          500: '#8EEA44',
          600: '#6ED226',
          700: '#56A31C',
          800: '#3F7A14',
          900: '#2A520D',
        },
        forest: {
          DEFAULT: '#113C36',
          50: '#E6F2F0',
          100: '#C2E0DC',
          200: '#9ACEC8',
          300: '#71BCB4',
          400: '#4DAAA0',
          500: '#2A988C',
          600: '#1F7268',
          700: '#184D46',
          800: '#113C36',
          900: '#0A2622',
        },
        ink: '#0E1A17',
        'soft-gray': '#F6F9F7',
        accent: {
          DEFAULT: '#2A645B',
          light: '#3A8578',
          dark: '#1A4D46',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'display': ['48px', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.01em' }],
        'h1': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.6' }],
        'body': ['18px', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'container': '1200px',
        'narrow': '800px',
      },
      spacing: {
        'section': '60px',
        'section-lg': '100px',
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(17, 60, 54, 0.06)',
        'soft-lg': '0 8px 40px rgba(17, 60, 54, 0.08)',
        'glow': '0 0 40px rgba(142, 234, 68, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'data-flow': 'linear-gradient(135deg, rgba(142, 234, 68, 0.05) 0%, rgba(42, 100, 91, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}
