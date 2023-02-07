/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./MyComponents/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/IndianPages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/MexicanPages/**/*.{js,ts,jsx,tsx}",
    
    "./MyComponents/Home/**/*.{js,ts,jsx,tsx}",
    "./MyComponents/Home/HomeComponents/**/*.{js,ts,jsx,tsx}",

    "./MyComponents/Indian/**/*.{js,ts,jsx,tsx}",
    "./MyComponents/Indian/IndianComponents/**/*.{js,ts,jsx,tsx}",

    "./MyComponents/Mexican/**/*.{js,ts,jsx,tsx}",
    "./MyComponents/Mexican/MexicanComponents/**/*.{js,ts,jsx,tsx}",
    
    "./MyComponents/Italian/**/*.{js,ts,jsx,tsx}",
    "./MyComponents/Italian/ItalianComponents/**/*.{js,ts,jsx,tsx}",

    

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
