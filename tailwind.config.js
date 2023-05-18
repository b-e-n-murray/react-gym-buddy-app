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
      '250': '250px',
      '300': '300px',
      '400': '400px',
      '500': '500px',
      '600': '600px',
      '700': '700px',
      '800': '800px'
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
      "7": "64px",
      "8": "80px",
      "9": "96px",
      "10": "112px",
      "20": "200px",
      "30": "300px",
      "40": "400px",
    },
    colors: {
      "obsidian": "#222831",
      "offwhite": "#eeeeee",
      "white": "#fdfdfd",
      "race-blue": "#0092ca",
      "dark-blue": "#0074a2",
      "red": "#b30000",
      "green": "#006400"
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