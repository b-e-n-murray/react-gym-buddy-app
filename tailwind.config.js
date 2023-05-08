/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
    },
    colors: {
      "obsidian": "#222831",
      "offwhite": "#eeeeee",
      "race-blue": "#0092ca",
      "dark-blue": "#0074a2",
    },
    fontFamily: {
      "ubuntu": ['Ubuntu', 'sans-serif'],
      "marker": ["Permanent Marker", "cursive"]
    },
    extend: {},
  },
  plugins: [],
}