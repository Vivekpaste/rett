/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["figtree", "sans-serif"],
        "figtree-italic": ["figtree-italic", "sans-serif"],
        "figtree-medium": ["figtree-semibold", "sans-serif"],
        "figtree-semibold": ["figtree-semibold", "sans-serif"],
        "figtree-bold": ["figtree-bold", "sans-serif"],
      },
      colors: {
        white: 'var(--white)',
        feta: 'var(--feta)',    
        navy: 'var(--navy)',  
        darkGrey: 'var(--darkGrey)',     
        navyBlue: 'var(--navyBlue)',  
        hoverGreen: 'var(--hoverGreen)',
        crayolaViolet: 'var(--crayolaViolet)',
        yellowGreen: "var(--yellowGreen)",
        ghostWhite: "var(--ghostWhite)",
        blackOlive: "var(--blackOlive)",
        honeyDew: "var(--honeyDew)",
      },
      screens: {
        'tablet': '990px',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
