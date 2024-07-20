/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        headerBg: '#24292f',
        headerSearchFont: '#FFFFFFBF',
        mainNavHover: '#21262c',
        profileBg: '#0d1118',
        profileCardBg: '#0d1116',
        profileDetails: '#e6edf3',
        border: '#252b32',
        userText: '#8d96a0',
        followHover: '#4593f8',
        followButton: '#21262d',
        followButtonText: '#c8d1d9',
        followButtonHover: '#292e36',
        followButtonBorder: '#30363d',
        proText: '#ab7df8',
        repoNameHome: '#4088e6',
        repoTypeHome: '#656c74',
        repoDescText: '#838b95',
      },
      fontFamily: {
        sans: ['Mona Sans', 'Mona Sans Bold'],
        'sans-bold': ['Mona Sans Bold', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
