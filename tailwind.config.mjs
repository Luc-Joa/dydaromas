/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#00529b',
          orange: '#f18a22',
          'blue-dark': '#003d74',
          'blue-light': '#0066c0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(0,0,0,0.18)',
        'card-lg': '0 8px 40px 0 rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};
