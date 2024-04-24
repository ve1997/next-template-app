import { tv } from "tailwind-variants";

export const btnCn = tv({
	base: "rounded-md flex items-center justify-center",
	variants: {
		size: {
			small: "text-sm",
			medium: "text-base",
			large: "text-lg",
		},
		variant: {
			contained: "p-2",
			outlined: "p-2",
			text: "p-2",
			icon: "p-1 rounded-full h-10 w-10",
		},
		color: {
			primary: "",
			secondary: "",
			error: "",
			warning: "",
			success: "",
			info: "",
			default: "",
		},
		disabled: {
			true: "opacity-60 cursor-not-allowed",
		},
	},
	compoundVariants: [
		{
			variant: "contained",
			color: "primary",
			className: "bg-primary-light text-white hover:bg-primary-dark",
		},
		{
			variant: "outlined",
			color: "primary",
			className:
				"border border-primary-light text-primary-light hover:border-primary-dark hover:text-primary-main",
		},
		{
			variant: "text",
			color: "primary",
			className:
				"text-primary-light hover:bg-primary-light/10 hover:text-primary-main",
		},
		{
			variant: "icon",
			color: "primary",
			className: "text-primary-light hover:bg-primary-light/20",
		},
		{
			variant: "contained",
			color: "secondary",
			className: "bg-secondary-light text-white hover:bg-secondary-dark",
		},
		{
			variant: "outlined",
			color: "secondary",
			className:
				"border border-secondary-light text-secondary-light hover:border-secondary-dark hover:text-secondary-main",
		},
		{
			variant: "text",
			color: "secondary",
			className:
				"text-secondary-light hover:bg-secondary-light/10 hover:text-secondary-main",
		},
		{
			variant: "icon",
			color: "secondary",
			className: "text-secondary-light hover:bg-secondary-light/20",
		},
		{
			variant: "contained",
			color: "error",
			className: "bg-error-light text-white hover:bg-error-dark",
		},
		{
			variant: "outlined",
			color: "error",
			className:
				"border border-error-light text-error-light hover:border-error-dark hover:text-error-main",
		},
		{
			variant: "text",
			color: "error",
			className:
				"text-error-light hover:bg-error-light/10 hover:text-error-main",
		},
		{
			variant: "icon",
			color: "error",
			className: "text-error-light hover:bg-error-light/20",
		},
		{
			variant: "contained",
			color: "warning",
			className: "bg-warning-light text-white hover:bg-warning-dark",
		},
		{
			variant: "outlined",
			color: "warning",
			className:
				"border border-warning-light text-warning-light hover:border-warning-dark hover:text-warning-main",
		},
		{
			variant: "text",
			color: "warning",
			className:
				"text-warning-light hover:bg-warning-light/10 hover:text-warning-main",
		},
		{
			variant: "icon",
			color: "warning",
			className: "text-warning-light hover:bg-warning-light/20",
		},
		{
			variant: "contained",
			color: "success",
			className: "bg-success-light text-white hover:bg-success-dark",
		},
		{
			variant: "outlined",
			color: "success",
			className:
				"border border-success-light text-success-light hover:border-success-dark hover:text-success-main",
		},
		{
			variant: "text",
			color: "success",
			className:
				"text-success-light hover:bg-success-light/10 hover:text-success-main",
		},
		{
			variant: "icon",
			color: "success",
			className: "text-success-light hover:bg-success-light/20",
		},
		{
			variant: "contained",
			color: "info",
			className: "bg-info-light text-white hover:bg-info-dark",
		},
		{
			variant: "outlined",
			color: "info",
			className:
				"border border-info-light text-info-light hover:border-info-dark hover:text-info-main",
		},
		{
			variant: "text",
			color: "info",
			className: "text-info-light hover:bg-info-light/10 hover:text-info-main",
		},
		{
			variant: "icon",
			color: "info",
			className: "text-info-light hover:bg-info-light/20",
		},
		{
			variant: "contained",
			color: "default",
			className: "bg-default-main text-white hover:bg-default-dark",
		},
		{
			variant: "outlined",
			color: "default",
			className:
				"border border-default-main text-default-main hover:border-default-dark hover:text-default-dark",
		},
		{
			variant: "text",
			color: "default",
			className:
				"text-default-main hover:bg-default-light/10 hover:text-default-dark",
		},
		{
			variant: "icon",
			color: "default",
			className: "text-default-main hover:bg-default-light/20",
		},
	],
});
