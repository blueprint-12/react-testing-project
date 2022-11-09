/** @type {import('tailwindcss').Config} */
module.exports = {
  //파일 크기 최소화 purge옵션
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
