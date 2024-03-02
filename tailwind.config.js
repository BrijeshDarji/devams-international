/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin"

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: 'rgba(143,149,98,0.85)',
				primaryLight: 'rgba(143,149,98,1)',
				secondary: 'rgba(244,221,184,0.66)',

				darkSlate: "#757575",
				lightWhite: "#F5F5F5F2",	
			},
			spacing: {
				25: "6.25rem",
				37: "9.75rem",
				180: "45rem",
			},
			fontSize: {
				"1.5xl": "1.3125rem",
				"3.5xl": "2rem",
				"4.5xl": "2.5rem",
				"6.5xl": "4rem",
				"8.5xl": "7.5rem",
			},
			padding: {
				25: "6.25rem"
			},
			width: {
				66: "17.5rem",
				75: "19rem",
				100: "30.75rem",
				105: "35.75rem",
				200: "74.5rem",
			},
			height: {
				103: "32.5rem"
			},
			lineHeight: {
				'extra-loose': '2.5',
				'12': '3rem',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0px 4px 4px var(--tw-shadow-color)',
				md: "4px 4px 12px var(--tw-shadow-color)",
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
	],
}