/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			...colors,
			midnight: '#1e293b',
			'bg-colour': '#2A3952',
			'highlight-1': '#1e293b',
			highlight: '#7DABF5',
			accent: '#C8DAF7',
			'accent-2': '#3c5376',
		},
		boxShadow: {
			'custom-1': '0 0 10px rgba(0,0,0,.4)',
			'custom-2': '0 0 10px rgba(0,0,0,.1)',
		},
		extend: {},
	},
	plugins: [require('@catppuccin/tailwindcss')],
}
