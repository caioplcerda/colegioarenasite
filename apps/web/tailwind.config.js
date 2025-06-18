/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
      borderRadius: {
        DEFAULT: 'var(--radius)'
      },
      spacing: {
        base: 'var(--spacing)'
      }
    }
  },
  plugins: [],
}
