/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Nord design system (styles/tokens.css)
        background: 'var(--color-bg)', card: 'var(--color-surface)',
        accent: { 400: 'var(--color-accent-hover)', 500: 'var(--color-accent)', 600: 'var(--color-accent-strong)' },
        text: { primary: 'var(--color-text-strong)', secondary: 'var(--color-text-muted)' },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
