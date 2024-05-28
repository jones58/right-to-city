import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      background: {
        default: '#dccead',
      },
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('@tailwindcss/typography'),
  addDynamicIconSelectors(),
  function ({ addUtilities }) {
    const newUtilities = {
      '.font-greve-wide': {
        fontFamily: 'greve',
        fontVariationSettings: "'wght' 600, 'wdth' 1000",
      },
      '.font-body': {
        fontFamily: 'klima',
      },
    };
    addUtilities(newUtilities);
  },
];
