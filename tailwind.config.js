/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          'mycustomcolor': '#151515',
          'chartreuse': '#7FFF00',
          "darkCyan":'darkcyan'
      },
      boxShadow:{
        'shad':' 10px 6px 7px 2px rgba(0, 0, 0, 0.5)'
      }
      
    },
  },
  plugins: [],
}
