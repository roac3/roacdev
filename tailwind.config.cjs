/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ds-strgray': '#23272a',
				'ds-gray': '#2c2f33',
				'ds-lightgray': '#99aab5',
				'ds-white': '#ffffff',
				'ds-blue':  '#7289da'
			},
			backgroundImage: {
				'night-banner': 'url("/images/night-banner.gif")'
			}
		},
	},
	plugins: [],
}
