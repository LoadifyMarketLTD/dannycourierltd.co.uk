import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // EXACT COLOR PALETTE FROM SPEC
        'navy-dark': '#0a1628',
        'navy-light': '#1a2332',
        'gold': {
          DEFAULT: '#d4a574',
          light: '#d4a574',
          dark: '#c9984f',
        },
        'blue-accent': '#4a9eff',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a574 0%, #c9984f 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
