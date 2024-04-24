import { tv } from "tailwind-variants";

export const colorCn = tv({
	variants: {
		color: {
			primary: "bg-primary-light hover:bg-primary-dark",
			secondary: "bg-secondary-light hover:bg-secondary-dark",
			error: "bg-error-light hover:bg-error-dark",
			success: "bg-success-light hover:bg-success-dark",
			warning: "bg-warning-light hover:bg-warning-dark",
			info: "bg-info-light hover:bg-info-dark",
			default: "bg-default-main hover:bg-default-dark",
		},
	},
});

export const commonCn = "rounded px-4 py-2";
