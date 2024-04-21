/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('assets/img/horsemane.jpg')",
    },
      colors: {
        'agile-red': '#BD2400'
    },
      animation: {
				fade: 'fadeIn .3s ease-in-out',
				'fade-out': 'fadeOut .3s ease-in-out',
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
			}
    }
  },
  plugins: [],
}

