import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        forest: {
          50: '#f2f8f3',
          100: '#e0eee3',
          200: '#c4dfcc',
          300: '#9cc7a9',
          400: '#6ea983',
          500: '#4c8c66',
          600: '#3b7152',
          700: '#325c45',
          800: '#2c4a3a',
          900: '#253d32',
          950: '#122119',
        },
        earth: {
          50: '#faf5f0',
          100: '#f0e6d8',
          200: '#e0ccb4',
          300: '#d0b08a',
          400: '#c1956a',
          500: '#b07b4f',
          600: '#9c6443',
          700: '#82513a',
          800: '#6c4334',
          900: '#5c3a2f',
          950: '#321c16',
        },
        spirit: {
          50: '#f5f7fe',
          100: '#ebeefe',
          200: '#d8dffc',
          300: '#b9c4f8',
          400: '#94a1f3',
          500: '#757eec',
          600: '#5b5cdf',
          700: '#4c49cb',
          800: '#403ea6',
          900: '#373885',
          950: '#232153',
        },
        gold: {
          50: '#fefbe8',
          100: '#fff8c2',
          200: '#ffee88',
          300: '#ffdf49',
          400: '#ffcf1b',
          500: '#faba04',
          600: '#e19500',
          700: '#bb7102',
          800: '#985608',
          900: '#7c470c',
          950: '#482400',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'water-ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' }
        },
        'sound-wave': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-out': 'fade-out 0.6s ease-out',
        'leaf-sway': 'leaf-sway 4s ease-in-out infinite',
        'water-ripple': 'water-ripple 2s linear infinite',
        'sound-wave': 'sound-wave 1.5s infinite ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'forest-texture': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" opacity=\"0.05\"><path d=\"M20 20C40 20 40 80 60 80C80 80 80 20 100 20\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\"/></svg>')",
        'sound-waves': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\" opacity=\"0.1\"><path d=\"M0 10 Q 15 5 30 10 T 60 10 T 90 10 T 120 10\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\"/></svg>')"
      },
      boxShadow: {
        'glow': '0 0 10px 2px rgba(255, 215, 0, 0.5)',
        'glow-md': '0 0 15px 5px rgba(255, 215, 0, 0.6)',
        'glow-lg': '0 0 20px 8px rgba(255, 215, 0, 0.7)'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;