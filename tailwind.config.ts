// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    "bg-[url('/assets/text-bg.jpg')]"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
