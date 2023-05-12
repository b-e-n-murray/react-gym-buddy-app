/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    height: {
      '10': '10px',
      '20': '20px',
      '30': '30px',
      '40': '40px',
      '50': '50px',
      '60': '60px',
      '70': '70px',
      '80': '80px',
      '90': '90px',
      '100': '100px',
      '150': '150px',
      '200': '200px',
      '250': '250px'
    },
    width: {
      '10': '10px',
      '20': '20px',
      '30': '30px',
      '40': '40px',
      '50': '50px',
      '60': '60px',
      '70': '70px',
      '80': '80px',
      '90': '90px',
      '100': '100px',
      '150': '150px',
      '200': '200px',
      '250': '250px'
    },
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
      "white": "#fdfdfd",
      "race-blue": "#0092ca",
      "dark-blue": "#0074a2",
    },
    fontFamily: {
      "ubuntu": ['Ubuntu', 'sans-serif'],
      "marker": ["Permanent Marker", "cursive"]
    },
    extend: {
      boxShadow: {
        'text': '0 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}