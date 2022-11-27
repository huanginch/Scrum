/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      padding: '15.75rem',
      center: true,
    },
    extend: {
      fontSize: {
        'headline': '1.75rem',
        'title-l': '1.5rem',
        'title-m': '1.25rem',
        'title': '1rem',
        'body-l': '1.25rem',
        'body-m': '1rem',
      },
      lineHeight: {
        'headline': '3rem',
        'title-l': '2rem',
        'title': '1.5rem',
        'body-l': '2rem',
        'body-m': '1.625rem',
      },
      backgroundImage: {
        'avatar': "url('../src/assets/avatarfram.png')",
      }
    },
    colors: {
      yellow: '#BFB600',
      red: '#CC1F75',
      blue: '#0BC1D9',
      white: '#E0E0E0',
      dark1: '#0B0F1A',
      dark2: '#111726',
      dark3: '#161E33'
    },
    
  },
  plugins: [
    // require('tailwindcss-writing-mode')({
    //   variants: ['responsive', 'hover']
    // })
  ],
}
