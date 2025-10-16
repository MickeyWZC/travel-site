/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3B82F6',
          green: '#10B981',
          'deep-blue': '#1E40AF',
          'light-green': '#34D399',
        },
      },
    },
  },
  plugins: [],
}

