import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          DEFAULT: "#0d0d0d",
          elevated: "#141414",
          card: "rgba(18, 18, 18, 0.75)",
        },
        brand: {
          orange: "#ff4d00",
          amber: "#ff8c00",
          crimson: "#e62e00",
          flame: "#ff3700",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ember": "radial-gradient(circle at 50% 50%, rgba(255, 77, 0, 0.15), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-orange": "0 0 35px -5px rgba(255, 77, 0, 0.35)",
        "glow-subtle": "0 0 25px -5px rgba(255, 255, 255, 0.08)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
