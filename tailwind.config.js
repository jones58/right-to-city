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
    fontFamily: {
      title: ['var(--font-greve)', 'sans-serif'],
      body: ['var(--font-klima)', 'sans-serif'],
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('@tailwindcss/typography'),
  addDynamicIconSelectors(),
];
