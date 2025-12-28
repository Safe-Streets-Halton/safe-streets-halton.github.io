/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.{md,html}',
    './_news/**/*.{md,html}',
    './_ontario-election-2025/**/*.{md,html}',
    './_volunteer-postings/**/*.{md,html}',
    './*.{html,md,markdown}',
    './get-involved/**/*.html',
    './campaigns/**/*.{html,md}',
    './elections/**/*.html',
    './events/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#447a38'
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}
