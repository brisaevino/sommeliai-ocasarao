/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3edea',      // Fundo principal (cor do footer)
        secondary: '#6a7352',    // Cor secundária
        accent: '#d9a441',       // Detalhes e destaques
        neutral: '#7a2e1e',      // Cor do texto (cor do footer)
        // Variações da cor principal
        'primary-light': '#f7f1ee',
        'primary-dark': '#ede7e2',
        // Variações da cor secundária
        'secondary-light': '#8a9572',
        'secondary-dark': '#525542',
        // Variações do accent
        'accent-light': '#e6b661',
        'accent-dark': '#c9932a',
      }
    },
  },
  plugins: [],
}

