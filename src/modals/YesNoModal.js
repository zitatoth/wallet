import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";

function YesNoModal({ onClose, onConfirmed, message }) {
	return (
		<Dialog open={true} onClose={onClose}>
			<DialogTitle>Confirmation required</DialogTitle>
			<DialogContent>
				<Typography variant={"body1"}>{message}</Typography>
			</DialogContent>
			<DialogActions
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<Button
					variant={"outlined"}
					onClick={() => {
						onConfirmed();
						onClose();
					}}
				>
					Yes
				</Button>
				<Button variant={"contained"} color={"error"} onClick={onClose}>
					No
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default YesNoModal;
