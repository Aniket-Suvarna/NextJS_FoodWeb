/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/MyComponents/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/IndianPages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/MexicanPages/**/*.{js,ts,jsx,tsx}",
    
    "./src/MyComponents/Home/**/*.{js,ts,jsx,tsx}",
    "./src/MyComponents/Home/HomeComponents/**/*.{js,ts,jsx,tsx}",

    "./src/MyComponents/Indian/**/*.{js,ts,jsx,tsx}",
    "./src/MyComponents/Indian/IndianComponents/**/*.{js,ts,jsx,tsx}",

    "./src/MyComponents/Mexican/**/*.{js,ts,jsx,tsx}",
    "./src/MyComponents/Mexican/MexicanComponents/**/*.{js,ts,jsx,tsx}",
    
    "./src/MyComponents/Italian/**/*.{js,ts,jsx,tsx}",
    "./src/MyComponents/Italian/ItalianComponents/**/*.{js,ts,jsx,tsx}",

    

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
