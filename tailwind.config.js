/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin"
import daisyui from "daisyui"

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				darkOrange: "#FBA72E",
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
		daisyui,
	],
}