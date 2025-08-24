/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        general: ["general", "sans-serif"],
        circularWeb: ["circular-web", "sans-serif"],
        robertMid: ["robert-medium", "sans-serif"],
        robert: ["robert-regular", "sans-serif"],
        space: ["space-gome", "sans-serif"],
        amped: ["amped", "sans-serif"],
        darklinos: ["darklinos", "sans-serif"],
        dena: ["dena", "sans-serif"],
        prophecy: ["prophecy", "sans-serif"],
        tigeroa: ["tigeroa", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#cdeaf7",
          150: "#344ceb",
          100: "#0494D5",
          175: "#0e1f96",
        },
        yellow: {
          50: "#faf3dc",
          150: "#d4a302",
          100: "#F59E0B",
          175: "#a87808",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient( var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
