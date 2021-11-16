const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#111111',
          900: '#000',
        },
      },
      boxShadow: {
        xs: '0 2px 4px rgba(0,0,0,0.1)',
        DEFAULT: '0 4px 8px rgba(0,0,0,0.12)',
        sm: '0 5px 10px rgba(0,0,0,0.12)',
        md: '0 8px 30px rgba(0,0,0,0.12)',
        lg: '0 30px 60px rgba(0,0,0,0.12)',
      },
      transitionProperty: {
        height: 'max-height',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
