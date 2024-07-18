/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        headerBg: '#24292f',
        headerSearchFont: '#FFFFFFBF',
        profileBg: '#0d1118',
        profileCardBg: '#0d1116',
      },
      fontFamily: {
        sans: ['Mona Sans', 'Mona Sans Bold'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
