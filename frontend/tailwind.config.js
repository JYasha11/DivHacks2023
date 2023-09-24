/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#DFDFDF',
        'primary-black': '#3D3D3D',
        'primary-blue-100': '#47AADF',
        'primary-blue-200': '#3A84F3',
      },
    },
  },
  plugins: [],
};
