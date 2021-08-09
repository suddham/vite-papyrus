// tailwind.config.js
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.html',
		'./src/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
}
