import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0a09",
        onyx: "#141210",
        char: "#1c1917",
        parchment: "#f3ece2",
        blush: "#e9dccb",
        gold: {
          DEFAULT: "#c9a35d",
          light: "#e4c98a",
          dark: "#9c7c3f"
        },
        rose: "#efe1d3"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      letterSpacing: {
        widest2: "0.35em"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e4c98a 0%, #c9a35d 45%, #9c7c3f 100%)",
        "grain": "url('/images/noise.png')"
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,163,93,0.35)",
        lift: "0 20px 60px -20px rgba(0,0,0,0.6)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
export default config;
