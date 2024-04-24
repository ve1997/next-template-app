import { cn } from "@/app/lib/utils";
import {
	type ButtonHTMLAttributes,
	type ReactElement,
	cloneElement,
} from "react";
import { btnCn } from "./styles";

type ButtonPropsWithoutChildren = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"children"
>;

export type CustomButtonProps = {
	label: string;
	startIcon?: ReactElement;
	endIcon?: ReactElement;
	size?: "small" | "medium" | "large";
	variant?: "contained" | "text" | "icon" | "outlined";
	color?:
		| "primary"
		| "secondary"
		| "error"
		| "success"
		| "warning"
		| "info"
		| "default";
	disabled?: boolean;
} & ButtonPropsWithoutChildren;

export const CustomButton = ({
	label,
	startIcon,
	endIcon,
	size = "medium",
	variant = "contained",
	color = "default",
	disabled = false,
	className,
	...props
}: CustomButtonProps) => {
	const tvProps = { variant, color, size, disabled };

	function createIconElement(icon: ReactElement) {
		const iconSize =
			size === "small"
				? { fontSize: "small" }
				: size === "large"
					? { fontSize: "large" }
					: {};
		const marginClasses = startIcon ? "mr-1" : "ml-1";
		return cloneElement(icon, {
			...iconSize,
			className: cn(
				"shrink-0",
				icon.props.className,
				marginClasses,
				disabled && "opacity-50",
				variant === "icon" && "m-0",
			),
		});
	}

	return (
		<button
			{...props}
			disabled={disabled}
			className={cn(btnCn(tvProps), className)}
		>
			{startIcon && createIconElement(startIcon)}
			{variant !== "icon" && (
				<span className="flex-1 text-center">{label}</span>
			)}
			{endIcon && createIconElement(endIcon)}
		</button>
	);
};
