/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./cms/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Consolidated colors from index.html (Source of Truth)
        'forest-green': '#1A3D2E', // Deep Forest Green - Primary
        'forest-dark': '#0F261C',  // Darker shade for text
        'gold': '#D4AF37',         // Warm Gold - Accent
        'gold-light': '#F3E5AB',
        'cream': '#F5F1E8',        // Soft Cream - Background
        'mist-blue': '#8BA6A9',    // Secondary
        'wood': '#6B5B4C',         // Natural Wood
        'sand-light': '#FAF9F6',
        'whatsapp': '#25D366',

        // Retaining some existing utility colors if used elsewhere
        'terracotta': '#C87E5B',
        'success': '#008A05',
        'error': '#C13515',
        gray: {
          50: '#F7F7F7',
          100: '#EBEBEB',
          400: '#B0B0B0',
          600: '#717171',
          900: '#222222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'Noto Sans SC', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        alt: ['Montserrat', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.03)',
        'card': '0 10px 40px rgba(26, 61, 46, 0.08)',
        'glow': '0 0 25px rgba(212, 175, 55, 0.2)',
        'strong': '0 20px 50px rgba(0,0,0,0.15)',
        'sm': '0 1px 2px rgba(0,0,0,0.08)', // Kept for compatibility
        'md': '0 2px 8px rgba(0,0,0,0.12)', // Kept for compatibility
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-slow': 'scaleSlow 20s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
