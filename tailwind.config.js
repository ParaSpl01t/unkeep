/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries'), require('@tailwindcss/forms')({ strategy: 'class' })]
};
