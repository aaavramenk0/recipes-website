/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#f94c25",
      },
    },
    fontSize: {
      "28px" : "28px",
    },
  },
  plugins: [],
}