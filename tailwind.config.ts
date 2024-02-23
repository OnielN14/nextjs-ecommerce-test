import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"
import { BIG_SCREEN, SMALL_SCREEN } from "./utils/size";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': `${SMALL_SCREEN}px`,
      'md': `${BIG_SCREEN}px`,
    },
    extend: {
      fontFamily: {
        'sans': ['"Pretendard"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)"
        }
      }
    },
  },
  plugins: [],
};
export default config;
