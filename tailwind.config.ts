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
        ennerty: {
          // Primary Brand Deep Green from PDF: #13322b
          forest: "#13322b",
          dark: "#0c201b",
          deep: "#091713",
          // Primary Brand Light Green from PDF: #b4e67e
          lime: "#b4e67e",
          limeLight: "#c8f099",
          limeDark: "#9ad45c",
          // Secondary / Teal Accent
          teal: "#174a40",
          tealLight: "#206254",
          // Tertiary Warm Orange from PDF swatch: #d97026
          orange: "#d97026",
          orangeLight: "#ea8640",
          orangeDark: "#b85614",
        },
        cream: {
          50: "#FDFDFB",
          100: "#F9FAF7", // Fresh clean architectural eco-cream
          200: "#F2F4EE",
          300: "#E3E7DC",
          400: "#CCD3C2",
          500: "#A8B29B",
          600: "#7E8A70",
          700: "#5B6450",
          800: "#3B4234",
          900: "#1C2018",
        },
        graphite: {
          DEFAULT: "#13322b",
          muted: "#3d534d",
          subtle: "#627a74",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(19, 50, 43, 0.05), 0 2px 6px -1px rgba(19, 50, 43, 0.03)",
        luxury: "0 20px 40px -15px rgba(19, 50, 43, 0.09), 0 0 1px 1px rgba(19, 50, 43, 0.06)",
        dark: "0 25px 50px -12px rgba(9, 23, 19, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.08)",
        "lime-glow": "0 0 35px -5px rgba(180, 230, 126, 0.4)",
        "orange-glow": "0 0 35px -5px rgba(217, 112, 38, 0.35)",
        "forest-glow": "0 0 35px -5px rgba(19, 50, 43, 0.45)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
