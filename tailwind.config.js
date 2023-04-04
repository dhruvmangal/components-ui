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
    tablet: "767px",
    // => @media (min-width: 767px) { ... }
    desktop: "991px",
    // => @media (min-width: 991px) { ... }
  },
};
