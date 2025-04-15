/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        "double-t":
          "0px 0px 10px rgba(0, 0, 0, 0.7), -2px -2px 10px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-double-t": {
          textShadow:
            "0px 0px 10px rgba(0, 0, 0, 0.7), -2px -2px 10px rgba(0, 0, 0, 0.7)",
        },
      });
    },
  ],
};
