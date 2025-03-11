import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/globals.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      fontSize: {
        "fs-61": "clamp(3.0625rem, 2.8653rem + 0.986vw, 3.8125rem)",
        "fs-49": "clamp(2.4375rem, 2.2732rem + 0.8217vw, 3.0625rem)",
        "fs-39": "clamp(1.9375rem, 1.806rem + 0.6574vw, 2.4375rem)",
        "fs-31": "clamp(1.5625rem, 1.4639rem + 0.493vw, 1.9375rem)",
        "fs-25": "clamp(1.25rem, 1.1678rem + 0.4108vw, 1.5625rem)",
        "fs-20": "clamp(1rem, 0.9343rem + 0.3287vw, 1.25rem)",
        "fs-16": "clamp(0.8125rem, 0.7632rem + 0.2465vw, 1rem)",
        "fs-13": "clamp(0.625rem, 0.5757rem + 0.2465vw, 0.8125rem)",
        "fs-10": "clamp(0.5rem, 0.4671rem + 0.1643vw, 0.625rem)",
        "fs-8": "clamp(0.4375rem, 0.4211rem + 0.0822vw, 0.5rem)",
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [],
} satisfies Config
