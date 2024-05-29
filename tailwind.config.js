import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      'white-custom': '#f6f5f0',
      'black-custom': '#333433',
      'green-custom': '#2b673a',
      'red-custom': '#e73223',
      'blue-custom': '#8bacc1',
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
      '.font-greve-wide-bold': {
        fontFamily: 'greve',
        fontVariationSettings: "'wght' 800, 'wdth' 1000",
      },
      '.font-body': {
        fontFamily: 'klima',
      },
    };
    addUtilities(newUtilities);
  },
];
