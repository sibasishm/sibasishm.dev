/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: '#1c1917',
				light: '#fafaf9',
				darkOffset: '#44403c',
				lightOffset: '#d6d3d1',
				primary: '#7B00D3',
				secondary: '#ffdb4d',
				gray: '#64748b',
			},
			fontFamily: {
				manrope: ['var(--font-manrope)'],
				jost: ['var(--font-jost)'],
			},
			animation: {
				roll: 'roll 24s linear infinite',
			},
			keyframes: {
				roll: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			screens: {
				sxl: '1180px',
				// @media (min-width: 1180px){...}
				xs: '480px',
				// @media (min-width: 480px){...}
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
