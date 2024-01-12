/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#F6F8FA",
        "navy-blue": "#1C4980",
        "light-blue": "#DDEDFF",
        "button-blue": "#0073E6",
        green: "#05C165",
        "pl-blue": "#8DA4BF",
      },
      inset: {
        92: "360px",
        94: "388px",
      },
      width: {
        94: "388px",
        590: "590px",
        530: "530px",
        510: "510px",
        345: "345px",
        392: "392px",
      },
      height: {
        40: "40px",
      },
    },
  },
  plugins: [],
};
