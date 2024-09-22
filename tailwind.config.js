/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primary: {
      50: "#E6F4F7",
      100: "#B0DDE6",
      200: "#8ACDDA",
      300: "#54B6C9",
      400: "#33A8BE",
      500: "#0092AE",
      600: "#00859E",
      700: "#00687C",
      800: "#005060",
      900: "#003D49",
    },
    accent: {
      50: "#E8EAEE",
      100: "#B7BDCB",
      200: "#959DB2",
      300: "#64708F",
      400: "#465479",
      500: "#182958",
      600: "#162550",
      700: "#111D3E",
      800: "#0D1730",
      900: "#0A1125",
    },
    gray: {
      50: "#F7F8F8",
      100: "#E7E8EA",
      200: "#DBDDDF",
      300: "#CBCDD1",
      400: "#C1C4C8",
      500: "#B1B5BA",
      600: "#A1A5A9",
      700: "#7E8184",
      800: "#616466",
      900: "#4A4C4E",
    },
    success: {
      50: "#D1FADF",
      100: "#12B76A",
      200: "#287334",
    },
    danger: {
      50: "#FEE4E2",
      100: "#FEE4E2",
      200: "#B71F14",
      500: "#F04438",
    },
    warning: {
      50: "#FEEFC6",
      100: "#F79009",
      200: "#C39901",
    },
    info: {
      50: "#DCEAFF",
      100: "#257CFD",
      200: "#1851A5",
    },
    white: "#FFFFFF",
    black: "#0A0A0B",
  },
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        nunitoSans: ['"Nunito Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
