export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        card: '#111827',
        border: '#334155',
        muted: '#94a3b8',
        primary: '#7c3aed',
        accent: '#38bdf8'
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
}
