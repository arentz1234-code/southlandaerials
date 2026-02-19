import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from logo
        primary: {
          50: "#e6f4fc",
          100: "#cce9f9",
          200: "#99d3f3",
          300: "#66bded",
          400: "#33a7e7",
          500: "#4A9FD4", // Main brand blue
          600: "#3b7faa",
          700: "#2c5f7f",
          800: "#1e4055",
          900: "#0f202a",
        },
        // Secondary gray from drone body
        secondary: {
          50: "#f4f6f7",
          100: "#e9ecef",
          200: "#d3d9df",
          300: "#bdc6cf",
          400: "#a7b3bf",
          500: "#8B99A6", // Drone body gray
          600: "#6f7a85",
          700: "#535c64",
          800: "#383d42",
          900: "#1c1f21",
        },
        // Accent light blue
        accent: {
          50: "#eaf6fc",
          100: "#d5edf9",
          200: "#abdaf3",
          300: "#81c8ed",
          400: "#6DB8E5", // Light blue accent
          500: "#4a9fd4",
          600: "#3b7faa",
          700: "#2c5f7f",
          800: "#1e4055",
          900: "#0f202a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
