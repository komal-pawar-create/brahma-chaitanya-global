import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0A192F",
            dark: "#060D1A",
            900: "#0A192F",
            800: "#112240",
            700: "#1B3A60",
            600: "#234978",
            100: "#E6EDF5",
            50: "#F0F4F9",
          },
          teal: {
            DEFAULT: "#0A9396",
            dark: "#005F73",
            900: "#053E47",
            800: "#005F73",
            700: "#088395",
            600: "#0A9396",
            500: "#0EABB0",
            100: "#D8F3DC",
            50: "#F0FDF4",
          },
          gold: {
            DEFAULT: "#C59B27",
            dark: "#A37D1A",
            light: "#E5C068",
            900: "#75550D",
            800: "#946C10",
            700: "#B8860B",
            600: "#C59B27",
            500: "#D4AF37",
            400: "#DFBA4E",
            100: "#FDF6DE",
            50: "#FFFDF5",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
