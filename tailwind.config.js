/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
      rotate: {
        '7': '7deg',
      }
    },

    fontFamily: {
      abc: ["Sedgwick Ave Display", "cursive"]
    },
    fontFamily: {
      xyz: ["Shadows Into Light", "cursive"]
    }
  },
  plugins: [],
}