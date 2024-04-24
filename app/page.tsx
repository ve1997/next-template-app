"use client";
import { CustomButton } from "@/app/components/custom/button";
import { showCustomModal } from "@/app/components/custom/modal";
import { Image } from "@mui/icons-material";

const showAlert = () => {
	showCustomModal({
		title: "sample title",
		message: <div>sample message</div>,
		color: "error",
		onSubmit: () => {
			alert("submitted");
		},
	});
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CustomButton
				label="Hello"
				variant="contained"
				color="primary"
				startIcon={<Image />}
				onClick={() => showAlert()}
				// disabled
			/>
		</main>
	);
}
