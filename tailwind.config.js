/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        large: ['26px', '32px'],
        xl: ['23px', '28px'],
        lg: ['18px', '22px'],
        medium: ['16px', '20px'],
        base: ['14px', '17px'],
        small: ['12px', '15px'],
        or: ['20px', '24px'],
      },
      screens: {
        mobile: '470px',
      },
    },
  },
  plugins: [],
};
