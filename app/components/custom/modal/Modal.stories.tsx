import { AutoAwesome, AutoDelete, Image } from "@mui/icons-material";
import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import { CustomModalManager, type CustomModalProps, showCustomModal } from "./";

export default {
	title: "example/CustomModal",
	component: CustomModalManager,
	tags: ["autodocs"],
	decorators: [
		(Story, context) => (
			<div className="flex justify-center">
				<button
					type="button"
					className="mt-4 rounded-md border border-gray-500 px-4 py-2 text-gray-500 hover:border-gray-900 hover:text-gray-900"
					onClick={() => {
						const { title, message, color, icon, onSubmit } = context.args;
						showCustomModal({ title, message, color, icon, onSubmit });
					}}
				>
					open
				</button>
				<Story />
			</div>
		),
	],
	args: {
		title: "Default Title",
		message: <div>This is a Default message</div>,
		color: "default",
	},
	argTypes: {
		color: {
			control: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"warning",
				"success",
				"info",
			],
		},
		icon: {
			control: "select",
			options: ["Image", "AutoAwesome", "AutoDelete", null],
			mapping: {
				Image: <Image />,
				AutoAwesome: <AutoAwesome />,
				AutoDelete: <AutoDelete />,
			},
		},
		message: { control: "object" },
	},
} as Meta;

type Story = {
	args: CustomModalProps;
};

export const Default: Story = {
	args: {
		onSubmit: fn(),
	},
};

export const Primary: Story = {
	args: {
		title: "Primary Title",
		message: (
			<div>
				<p>This is a Primary message</p> <p>This is a Primary message</p>
			</div>
		),
		color: "primary",
		onSubmit: () => {
			alert("Primary submit action");
		},
	},
};

export const Secondary: Story = {
	args: {
		title: "Secondary Title",
		message: <div>This is a Secondary message"</div>,
		color: "secondary",
		onSubmit: () => {
			alert("Secondary submit action");
		},
	},
};

export const ErrorModal: Story = {
	args: {
		title: "Error Title",
		message: <div>This is an Error message</div>,
		color: "error",
		onSubmit: () => {
			alert("Error submit action");
		},
	},
};

export const Warning: Story = {
	args: {
		title: "Warning Title",
		message: <div>This is a Warning message</div>,
		color: "warning",
		onSubmit: () => {
			alert("Warning submit action");
		},
	},
};

export const Success: Story = {
	args: {
		title: "Success Title",
		message: <div>This is a Success message"</div>,
		color: "success",
		onSubmit: () => {
			alert("Success submit action");
		},
	},
};

export const Info: Story = {
	args: {
		title: "Info Title",
		message: <div>This is an Info message"</div>,
		color: "info",
		onSubmit: () => {
			alert("Info submit action");
		},
	},
};

export const WithIcon: Story = {
	args: {
		title: "With Icon Title",
		message: <div>This is a With Icon message"</div>,
		color: "default",
		icon: <Image />,
	},
};

export const OnlyClose: Story = {
	args: {
		title: "Only Close Title",
		message: <div>This is an Only Close message"</div>,
		color: "default",
	},
};
