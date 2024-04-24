import { AutoAwesome, AutoDelete, Image } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CustomButton } from "./index";

const meta = {
	title: "Example/CustomButton",
	component: CustomButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { label: "button", onClick: fn() },
	argTypes: {
		startIcon: {
			control: "select",
			options: ["Image", "AutoAwesome", "AutoDelete", null],
			mapping: {
				Image: <Image />,
				AutoAwesome: <AutoAwesome />,
				AutoDelete: <AutoDelete />,
			},
		},
		endIcon: {
			control: "select",
			options: ["Image", "AutoAwesome", "AutoDelete", null],
			mapping: {
				Image: <Image />,
				AutoAwesome: <AutoAwesome />,
				AutoDelete: <AutoDelete />,
			},
		},
	},
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { variant: "contained", color: "primary" },
};
export const Secondary: Story = {
	args: { variant: "contained", color: "secondary" },
};
export const ErrorBtn: Story = {
	args: { variant: "contained", color: "error" },
};
export const Warning: Story = {
	args: { variant: "contained", color: "warning" },
};
export const Success: Story = {
	args: { variant: "contained", color: "success" },
};
export const Info: Story = {
	args: { variant: "contained", color: "info" },
};
export const Outlined: Story = {
	args: { variant: "outlined" },
};
export const Text: Story = {
	args: { variant: "text" },
};
export const Icon: Story = {
	args: { variant: "icon", startIcon: <Image /> },
};
export const StartIcon: Story = {
	args: { startIcon: <Image /> },
};
export const EndIcon: Story = {
	args: { endIcon: <Image /> },
};
export const Disabled: Story = {
	args: { disabled: true },
};
