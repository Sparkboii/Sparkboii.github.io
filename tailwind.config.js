/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#08080f",
        charcoal: "#0f0f1a",
        surface:  "#13131f",
        border:   "#1c1c2e",
        accent:   "#00f5d4",
        blue:     "#3b82f6",
        crimson:  "#ef4444",
        muted:    "#6b7280",
        bright:   "#f0f4ff",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono:    ["'Roboto Mono'", "monospace"],
        body:    ["'Inter'", "sans-serif"],
      },
      animation: {
        marquee:     "marquee 30s linear infinite",
        "marquee-r": "marqueeR 30s linear infinite",
        float:       "float 7s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "blob":      "blob 8s ease-in-out infinite",
      },
      keyframes: {
        marquee:  { "0%": { transform: "translateX(0%)" },   "100%": { transform: "translateX(-50%)" } },
        marqueeR: { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0%)" } },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":     { transform: "translateY(-22px) rotate(4deg)" },
        },
        blob: {
          "0%,100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%", transform: "scale(1) rotate(0deg)" },
          "33%":     { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%", transform: "scale(1.05) rotate(60deg)" },
          "66%":     { borderRadius: "20% 60% 60% 40%/70% 30% 50% 40%", transform: "scale(0.97) rotate(120deg)" },
        },
      },
    },
  },
  plugins: [],
};