"use client";
import { cn } from "@/app/lib/utils";
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useState,
} from "react";
import type React from "react";
import ReactDOM from "react-dom";
import { colorCn, commonCn } from "./styles";

export type CustomModalProps = {
	title?: string;
	icon?: ReactNode;
	color?:
		| "primary"
		| "secondary"
		| "error"
		| "success"
		| "warning"
		| "info"
		| "default";
	message?: ReactNode;
	onSubmit?: () => void;
};

let setCustomModalContentGlobal: Dispatch<
	SetStateAction<CustomModalProps | null>
>;

export function showCustomModal(content: CustomModalProps) {
	setCustomModalContentGlobal(content);
}

export function closeCustomModal() {
	setCustomModalContentGlobal(null);
}

export function CustomModal({
	title,
	icon,
	color = "primary",
	message,
	onSubmit,
}: CustomModalProps) {
	function handleBackdropClick(event: React.MouseEvent) {
		event.stopPropagation();
		closeCustomModal();
	}
	function handleKeyDown(event: React.KeyboardEvent) {
		if (event.key === "Escape") {
			closeCustomModal();
		}
	}
	return (
		<div
			className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
			onClick={handleBackdropClick}
			onKeyDown={handleKeyDown}
		>
			<div
				className="max-w-lg rounded-lg bg-white p-8"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<div className="mb-4 flex items-center gap-2">
					{icon}
					<h2 className="font-bold text-xl">{title}</h2>
				</div>
				{message && <div className="mb-4 whitespace-pre-line">{message}</div>}
				{onSubmit === undefined ? (
					<div className="flex justify-center">
						<button
							type="button"
							onClick={closeCustomModal}
							className={cn("w-full text-white", commonCn, colorCn({ color }))}
						>
							Close
						</button>
					</div>
				) : (
					<div className="flex justify-between">
						<button
							type="button"
							onClick={closeCustomModal}
							className={cn(commonCn, "bg-gray-300 hover:bg-gray-400")}
						>
							Cancel
						</button>
						<button
							type="button"
							onClick={() => {
								onSubmit();
								closeCustomModal();
							}}
							className={cn("text-white", commonCn, colorCn({ color }))}
						>
							OK
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export function CustomModalManager() {
	const [customModalContent, setCustomModalContent] =
		useState<CustomModalProps | null>(null);

	setCustomModalContentGlobal = setCustomModalContent;

	if (!customModalContent) return null;

	return ReactDOM.createPortal(
		<CustomModal {...customModalContent} />,
		document.body,
	);
}
