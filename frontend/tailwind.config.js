/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '100': '#D6EFFF',
          '300': '#3498DB',
          '500': '#13496C',
        },
        neutral: {
          '100': '#FFFFFF',
          '200': '#F0F1F4',
          '300': '#E2E3E9',
          '400': '#D6D8E0',
          '500': '#C5C7D3',
          '600': '#9DA0AF',
          '700': '#5C5F70',
          '800': '#181E34',
        },
        danger: {
          '300': '#B8143D',
        },
      },
    },
  },
  plugins: [],
}

