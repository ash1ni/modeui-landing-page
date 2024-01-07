module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#faf9ff",
          100: "#f4eff6",
          200: "#e6e7e9",
          800: "#363c46",
          900: "#121417",
          "900_02": "#0d0c22",
          "900_01": "#163300",
          "200_01": "#eeefef",
        },
        blue_gray: {
          50: "#f1f1f2",
          600: "#5a6475",
          800: "#2c3e50",
          900: "#24282f",
          "100_7f": "#d0d0d07f",
        },
        deep_purple: { A100_7f: "#c597ff7f" },
        purple: { 50: "#efe4f2", 900: "#571f66", "900_01": "#3d156c" },
        orange: { 300: "#e3ad54" },
        black: { 900: "#000000" },
        teal: { 900: "#002b31" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { manrope: "Manrope", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
