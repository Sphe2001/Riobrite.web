/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#cdeaf7",
          150: "#64c1e6ff",
          100: "#0097d2",
        },
        yellow: {
          50: "#faf3dc",
          150: "#d4a302",
          100: "#f9c51c",
        },
      },
    },
  },
  plugins: [],
}

