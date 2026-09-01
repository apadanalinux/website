/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parch: {
          teal: '#21c796',
          blue: '#0385ce',
          indigo: '#0d40bf',
        },
        background: '#020917',
        foreground: '#f8fafc',
        card: '#0b1322',
        secondary: '#1b2639',
        muted: '#1e293b',
        'muted-foreground': '#94a3b8',
        border: 'rgba(255, 255, 255, 0.08)',
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#21c796',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Estedad', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        estedad: ['Estedad', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#cbd5e1',
            h1: { color: '#f8fafc', fontWeight: '800' },
            h2: { color: '#f8fafc', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.5rem', fontWeight: '700' },
            h3: { color: '#f1f5f9', fontWeight: '600' },
            h4: { color: '#e2e8f0', fontWeight: '600' },
            strong: { color: '#f8fafc', fontWeight: '700' },
            code: {
              color: '#21c796',
              backgroundColor: '#1b2639',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            a: {
              color: '#21c796',
              textDecoration: 'none',
              '&:hover': {
                color: '#34d399',
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: '#21c796',
              color: '#94a3b8',
              backgroundColor: 'rgba(27, 38, 57, 0.5)',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
            },
            hr: {
              borderColor: 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
