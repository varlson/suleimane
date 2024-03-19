import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-900": "#e6e6e6",
        "white-950": " #f2f2f2",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        syne: ["var(--font-syne)"],
        jura: ["var(--font-jura)"],
        fira_code: ["var(--font-fira_code)"],
      },
    },
  },
  plugins: [],
};
export default config;
