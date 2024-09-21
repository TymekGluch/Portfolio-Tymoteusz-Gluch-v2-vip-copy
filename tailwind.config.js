/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}

const accentColor = {
  primary: generateColorClass('accent-orange'),
  secondary: generateColorClass('accent-green'),
  tertiary: generateColorClass('accent-blue'),
};

const backgroundColor = {
  primary: generateColorClass('background'),
}

const textColor = {
  primary: generateColorClass('text'),
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        linearProgress: {
          '0%': {
            width: '0',
            left: '0'
          },

          '100%': {
            width: '100%',
          },
        }
      },

      animation: {
        linearProgress: 'linearProgress 2000ms  infinite'
      },

      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'monospace'],
      },

      colors: {
        accentColor,
        backgroundColor,
        textColor,
      },

      boxShadow: {
        'md': '0 0 25px 1px rgb(var(--text))',
        'md-inner': 'inset 0 0 25px 1px rgb(var(--text))',

        'variant-2-md': '0 0 25px 1px rgb(var(--accent-orange))',
        'variant-2-md-inner': 'inset 0 0 25px 1px rgb(var(--accent-orange))',

        'variant-3-md': '0 0 25px 1px rgb(var(--accent-green))',
        'variant-3-md-inner': 'inset 0 0 25px 1px rgb(var(--accent-green))',

        'variant-4-md': '0 0 25px 1px rgb(var(--accent-blue))',
        'variant-4-md-inner': 'inset 0 0 25px 1px rgb(var(--accent-blue))',
      }
    },
  },
  plugins: [],
}