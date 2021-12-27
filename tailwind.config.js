const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enable: true,
    preserveHtmlElements: false,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: "class",
  theme: {
    colors,
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        zinc: {
          200: "#e4e4e7",
          700: "#3f3f46",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: 700,
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            code: {
              color: theme("colors.gray.100"),
            },
            h1: {
              color: theme("colors.warmGray.500"),
            },
            h2: {
              color: theme("colors.warmGray.500"),
            },
            h3: {
              color: theme("colors.warmGray.500"),
            },
            a: {
              color: theme("colors.gray.300"),
            },
            strong: {
              color: theme("colors.gray.300"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
      animation: {
        "fade-in": "fade-in 0.2s ease-in-out",
        "fade-out": "fade-out 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
