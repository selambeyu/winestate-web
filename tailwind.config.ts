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
      colors: {
        "dark-blue": "#1A2F44",
        "light-blue": "#203A54",
        "gold-yellow": "#D0B58A",
        "yello-orange": "#EFA065",
        "gray-100": "#97A2B5",
        "light-white": " #FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
