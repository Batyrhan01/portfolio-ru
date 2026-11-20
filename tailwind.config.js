/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Geologica вместо Kanit из шаблона: в Kanit нет русских букв
        sans: ['Geologica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
