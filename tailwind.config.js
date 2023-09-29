/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        'smLan': { 'raw': '(max-height: 450px)' },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        
      },
      colors: {
        lal: "rgb(235, 63, 40)",
        hirwa: "#27ae60",
        kala: "#192a56",
        light: "#666",
        sawli: "0 .5rem 1.5rem rgba(0,0,0,.1)",
        bhurka: '#eee'
      },
      rotate: { gol: "360deg" },
    },
  },
  plugins: [],
};
