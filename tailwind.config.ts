import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        panel: "#101016",
        flame: "#E50914",
        flameDark: "#990610",
        soft: "#A5A5AD"
      },
      borderRadius: {
        xxl: "1.75rem"
      },
      boxShadow: {
        glow: "0 20px 70px rgba(229, 9, 20, .35)"
      }
    }
  },
  plugins: []
};

export default config;
