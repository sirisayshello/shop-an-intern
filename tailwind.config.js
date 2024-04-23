/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'hero-img': "url('assets/img/horsemane.jpg')",
    },
      colors: {
        'agile-red': '#BD2400',
        'scrum-blue': '#30559B',
        'waterfall-blue': "#95B7DF"

    },
      animation: {
				fade: 'fadeIn .3s ease-in-out',
				'fade-out': 'fadeOut .3s ease-in-out',
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				fadeOut: {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
			}
    }
  },
  plugins: [],
}

