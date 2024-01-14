// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      'xxs': ['12px', '16px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['30px', '36px'],
      '3xl': ['36px', '40px'],
      '4xl': ['48px', '48px'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
 }