/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
     fontFamily: {
      default: ['e-Ukraine', 'sans-serif']
    },
     screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1140px",
      // => @media (min-width: 1140px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1728px",
      // => @media (min-width: 1824px) { ... }
    },
    colors: {
      inherit: "inherit",
      current: "CurrentColor",
      transparent: "transparent",
      blue: "#0066CC",
      white: "#FFFFFF",
      yellow: "#FFE601",
      black: "#232323",
      grey: "#FAFAFA",
      red:'red'
    },
    extend: {},
  },
  plugins: [],
}

