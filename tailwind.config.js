/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        marquezOrange: '#FF5E00',
        marquezYellow: '#FFD700',
        marquezBlack: '#150000',
        biruTuwa: {
          100: "#d5d6e6",
          200: "#abaccd",
          300: "#8183b4",
          400: "#57599b",
          500: "#2d3082",
          600: "#242668",
          700: "#1b1d4e",
          800: "#121334",
          900: "#090a1a",
        },
        biruMuda: {
          100: "#cdedfa",
          200: "#9bdaf6",
          300: "#6ac8f1",
          400: "#38b5ed",
          500: "#06a3e8",
          600: "#0582ba",
          700: "#04628b",
          800: "#02415d",
          900: "#01212e",
        },
        merahh: {
          100: "#f8d3d5",
          200: "#f1a7aa",
          300: "#ea7b80",
          400: "#e34f55",
          500: "#dc232b",
          600: "#b01c22",
          700: "#84151a",
          800: "#580e11",
          900: "#2c0709",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        Lora: ["Lora", "serif"],
        AnakArsitek: ["Architects Daughter"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      gridTemplateColumns: {
        x2440: "440px 525px",
        x1fr480: "1fr 480px",
        x1fr300: "1fr 350px",
        x2500: "620px 230px",
        x150: "190px 190px",
        x250: "250px 250px",
        x550: "550px 550px",
        x170: "150px 220px",
        x5170: "repeat(4, 140px)",
        x4180: "repeat(4, 180px)",
        x3300: "repeat(3, 300px)",
      },
    },
  },
  plugins: [],
};

