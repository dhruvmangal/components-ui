/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  height: {
    default: "40px",
    lg: "60px",
    sm: "20px",
  },
  screens: {
    xs: "0px",
    sm: "600px",
    tab: "800px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
  },
};
