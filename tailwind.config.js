// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Small outline
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Default outline
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)", // Large outline
        white: "2px 2px 4px rgba(255, 255, 255, 0.8)", // White outline
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-white": {
          textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
    require("tailwind-scrollbar-hide"),
  ],
};
