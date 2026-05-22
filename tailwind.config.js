import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-violet": "#7C3AED",
        "neon-cyan": "#06B6D4",
        "neon-pink": "#EC4899",
        "space-dark": "#050510",
        "space-mid": "#0a0a1a",
        "space-card": "#0d0d2b",
        "glass-border": "rgba(124, 58, 237, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "typing-cursor": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.4)" },
          "50%": { boxShadow: "0 0 50px rgba(6,182,212,0.7)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(124,58,237,0.5)" },
          "50%": { borderColor: "rgba(6,182,212,0.8)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #7C3AED, #06B6D4)",
        "gradient-pink-violet": "linear-gradient(135deg, #EC4899, #7C3AED)",
        "gradient-cosmic": "radial-gradient(ellipse at top, #0d0d2b 0%, #050510 70%)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
