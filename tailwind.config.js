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
        smLan: { raw: "(max-height: 450px)" },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        login_img: "url('/login/login1.png')",
        login_bg: "url('/login/login2.jpg')",
      },
      colors: {
        lal: "rgb(235, 63, 40)",
        hirwa: "rgb(13 148 136/var(--tw-bg-opacity))",
        kala: "#192a56",
        light: "#666",
        sawli: "0 .5rem 1.5rem rgba(0,0,0,.1)",
        bhurka: "#eee",
      },
      rotate: { gol: "360deg" },
    },
  },
  plugins: [],
};
