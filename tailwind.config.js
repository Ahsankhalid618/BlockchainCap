// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: {
        colors: {
          'dark-primary': '#001731',
          'dark-secondary': '#16a34a',
        },
      },
      backgroundImage: {
        'main': "url('/new.png')",
        
      },
      width: {
      'full': '100%', // Customize the 'w-full' utility class
      // You can also define other custom widths here
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      'modern' : '75%',
      // ... and so on
    },
    maxWidth: {
      'custom' : "32rem",
    },
    spacing: {
      'custom': '86%',
    },
    colors: {
      'scrollbar-track-color': '#e0e0e0',
      'scrollbar-thumb-color': '#808080',
      'dark-primary': '#030e1d',

      blue: {
        50: "#e6f1fe",
        100: "#cce3fd",
        200: "#99c7fb",
        300: "#66aaf9",
        400: "#338ef7",
        500: "#006FEE",
        600: "#005bc4",
        700: "#004493",
        800: "#002e62",
        900: "#001731",
      },
      primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d","950":"#052e16"}
    },
  },
  fontFamily: {
    'body': [
  'Roboto', 
  'ui-sans-serif', 
  'system-ui', 
  '-apple-system', 
  'system-ui', 
  'Segoe UI', 
  'Roboto', 
  'Helvetica Neue', 
  'Arial', 
  'Noto Sans', 
  'sans-serif', 
  'Apple Color Emoji', 
  'Segoe UI Emoji', 
  'Segoe UI Symbol', 
  'Noto Color Emoji'
],
    'sans': [
  'Roboto', 
  'ui-sans-serif', 
  'system-ui', 
  '-apple-system', 
  'system-ui', 
  'Segoe UI', 
  'Roboto', 
  'Helvetica Neue', 
  'Arial', 
  'Noto Sans', 
  'sans-serif', 
  'Apple Color Emoji', 
  'Segoe UI Emoji', 
  'Segoe UI Symbol', 
  'Noto Color Emoji'
]
  }
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })],
};