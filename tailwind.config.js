/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img':'url("/images/bg1.jpg")',
        'sec-img':'url("/images/sec1.jpg")',
      },
    },
  },
  plugins: [],
}
