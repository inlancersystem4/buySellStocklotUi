/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1360px",
      },
    },
    fontFamily: {
      sans: ["Source Sans 3", "sans-serif"],
      serif: ["Lora", "serif"],
    },
    colors: {
      "dark-charcoal": "hsl(var(--dark-charcoal) / <alpha-value>)",
      "burnt-orange": "hsl(var(--burnt-orange) / <alpha-value>)",
      "light-gray": "hsl(var(--light-gray) / <alpha-value>)",
      "pure-white": "hsl(var(--pure-white) / <alpha-value>)",
      "deep-black": "hsl(var(--deep-black) / <alpha-value>)",
      "soft-cream": "hsl(var(--soft-cream) / <alpha-value>)",
      "blue-midnight": "hsl(var(--blue-midnight) / <alpha-value>)",
      "off-white": "hsl(var(--off-white) / <alpha-value>)",
      "slate-gray": "hsl(var(--slate-gray) / <alpha-value>)",
      "cool-gray": "hsl(var(--cool-gray) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
