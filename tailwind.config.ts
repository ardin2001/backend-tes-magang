import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        "84/100": "84%",
        "85/100": "85%",
        "86/100": "86%",
        "87/100": "87%",
        "88/100": "88%",
        "89/100": "89%",
        "90/100": "90%",
        "91/100": "91%",
        "92/100": "92%",
        "93/100": "93%",
        "94/100": "94%",
        "95/100": "95%",
        "96/100": "96%",
        "97/100": "97%",
        "98/100": "98%",
        "99/100": "99%",
      },
      dropShadow: {
        "strong": "0 0 6px rgb(210, 210, 210)",
        "medium": "0 0 5px rgb(210, 210, 210)",
        "low": "0 0 4px rgb(210, 210, 210)",
        "login": "0 0 4px rgb(152,152,152)",
      },
      colors: {
        primary: "#e64d00",
        secondary: "#ff5500",
        tertiary: "#ff661a",
        quaternary: "#ff884d",
        quinary: "#ff9966",
        strong : "#ffccb3",
        medium : "#ffddcc",
        low : "#fffbfa"
      },
      textColor: {
        primary: "#e64d00",
        secondary: "#ff5500",
        tertiary: "#ff661a",
        quaternary: "#ff884d",
        quinary: "#ff9966",
        strong : "#ffccb3",
        medium : "#ffddcc",
        low : "#fffbfa"
      },
      backgroundColor: {
        primary: "#e64d00",
        secondary: "#ff5500",
        tertiary: "#ff661a",
        quaternary: "#ff884d",
        quinary: "#ff9966",
        strong : "#ffccb3",
        medium : "#ffddcc",
        low : "#fffbfa"
      },
      outlineColor: {
        primary: "#e64d00",
        secondary: "#ff5500",
        tertiary: "#ff661a",
        quaternary: "#ff884d",
        quinary: "#ff9966",
        strong : "#ffccb3",
        medium : "#ffddcc",
        low : "#fffbfa"
      },
      inset: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "5/100": "5%",
        "15/100": "15%",
        "25/100": "25%",
        "35/100": "35%",
        "38/100": "38%",
        "45/100": "45%",
        "55/100": "55%",
        "65/100": "65%",
        "75/100": "75%",
        "85/100": "85%",
        "95/100": "95%",
      },
      translate: {
        "1.5full": "150%",
        "2full": "200%",
      },
      borderColor: {
        primary: "#e64d00",
        secondary: "#ff5500",
        tertiary: "#ff661a",
        quaternary: "#ff884d",
        quinary: "#ff9966",
        strong : "#ffccb3",
        medium : "#ffddcc",
        low : "#fffbfa"
      },
      borderWidth: {
        1: "1px",
        1.5: "1.5px",
      },
      height: {
        "100": "28.5rem",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "17": "repeat(17, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
        "19": "repeat(19, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
      },
      blur: {
        "low": "0.5px",
        "medium": "1px",
        "high": "2px",
      },
      boxShadow :{
        "furdamental": "0 0 8px 3px rgb(46, 46, 46,0.4)",
        "intermediate": "0 0 5px 5px",
        "advanced": "0 0 6px 6px",
      }
    },
  },
  plugins: [],
};
export default config;
