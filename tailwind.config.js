/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "money-green": "#25D366",
        "gold-foil": "#FFD700",
        "neon-purple": "#9F00FF",
        "off-white": "#F5F5F5",
      },
      fontFamily: {
        heading: ["var(--font-anton)"],
        body: ["var(--font-space-grotesk)"],
        alt: ["var(--font-inter)"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glitch: "glitch 500ms infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-mask":
          "linear-gradient(90deg, var(--gold-foil), var(--money-green))",
        noise: 'url("/noise.png")',
      },
    },
  },
  plugins: [],
};
