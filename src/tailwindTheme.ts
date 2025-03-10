import type { Config } from "tailwindcss";

const tailwindTheme: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Matches bg-blue-600-ish
        secondary: "#1e40af",
        blue: {
          50: "oklch(.97 .014 254.604)",
          600: "oklch(.546 .245 262.881)",
          700: "oklch(.488 .243 264.376)",
        },
      },
      spacing: {
        "button-sm": "0.5rem",
      },
    },
  },
};

export default tailwindTheme;