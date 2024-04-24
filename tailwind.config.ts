import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#42a5f5",
					main: "#1976d2",
					dark: "#1565c0",
				},
				secondary: {
					light: "#ba68c8",
					main: "#9c27b0",
					dark: "#7b1fa2",
				},
				error: {
					light: "#ef5350",
					main: "#d32f2f",
					dark: "#c62828",
				},
				warning: {
					light: "#ff9800",
					main: "#ed6c02",
					dark: "#e65100",
				},
				info: {
					light: "#03a9f4",
					main: "#0288d1",
					dark: "#01579b",
				},
				success: {
					light: "#4caf50",
					main: "#2e7d32",
					dark: "#1b5e20",
				},
				default: {
					light: "#9e9e9e",
					main: "#616161",
					dark: "#303030",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
