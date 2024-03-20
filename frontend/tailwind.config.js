/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color1": "#0d1117",
        "bg-color2": "#161B22",
        "text-color1": "#b6b6b6",
      },
    },
  },
  plugins: [],
};
