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
        blue: {
          // DEFAULT: "#000",
          100: "#16C5E1",
          200: "#043144",
          300: "#020819",
        },
      },
    },
  },
  plugins: [],
};
export default config;

// //    {
//           "animation": {
//             shimmer: "shimmer 2s linear infinite"
//           },
//           "keyframes": {
//             shimmer: {
//               from: {
//                 "backgroundPosition": "0 0"
//               },
//               to: {
//                 "backgroundPosition": "-200% 0"
//               }
//             }
//           }
//         }
