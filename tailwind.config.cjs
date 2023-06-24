/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ds-strgray': '#1E1F22',
				'ds-gray': '#303338',
				'ds-lightgray': '#6F7279',
				'ds-white': '#ffffff',
				'ds-blue':  '#7289da',
				'lighttext': '#A1A6AC'
			},
			backgroundImage: {
				'night-banner': 'url("/images/night-banner.gif")'
			},
			fontFamily:{
				Nunito: 'Nunito Sans'
			}
		}
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
