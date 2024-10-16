export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.2" }],
        "9xl": ["8rem", { lineHeight: "1.3" }],
      },
      colors: {
        primary: {
          light: "#c0d330",
          dark: "#aabb22",
        },
        background: {
          light: "#ffffff",
          dark: "#1a202c",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
        secondary: {
          light: "#f0f0f0",
          dark: "#2d3748",
        },
        accent: {
          light: "#ff6347",
          dark: "#dd6b20",
        },
        muted: {
          light: "#e2e8f0",
          dark: "#4a5568",
        },
      },
      borderColor: {
        DEFAULT: "#e2e8f0",
        light: "#e2e8f0",
        dark: "#4a5568",
      },
      ringColor: {
        DEFAULT: "#cbd5e0",
        light: "#cbd5e0",
        dark: "#2d3748",
      },
    },
  },
  plugins: [],
};
