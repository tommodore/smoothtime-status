/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",     // zinc-950
        card: "#18181b",           // zinc-900
        accent: {
          400: "#34d399",          // emerald-400
          500: "#10b981",          // emerald-500
          600: "#059669",          // emerald-600
        },
        text: {
          primary: "#f4f4f5",      // zinc-100
          secondary: "#a1a1aa",    // zinc-400
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
