/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050713",
        panel: "rgba(14, 23, 42, 0.58)",
        line: "rgba(148, 163, 184, 0.18)"
      },
      boxShadow: {
        glass: "0 20px 70px rgba(2, 6, 23, 0.42)",
        glow: "0 0 42px rgba(99, 102, 241, 0.24)"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        scan: "scan 3.8s ease-in-out infinite",
        pulseLine: "pulseLine 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
