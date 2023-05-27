import * as React from "react";
import {
	Grid,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";

function ProfileModal({ onClose }) {
	const { sessionUser } = useAuth();
	return (
		<Dialog
			open={true}
			onClose={onClose}
			PaperProps={{
				sx: {
					width: "30%",
				},
			}}
		>
			<DialogTitle style={{ textAlign: "center", marginBottom: 20 }}>
				My Profile
			</DialogTitle>
			<DialogContent>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography>Name:</Typography>

					<Typography>{sessionUser.name}</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography>E-mail:</Typography>
					<Typography>majd@egyszer.hu</Typography>
				</Grid>
			</DialogContent>
			<Button variant={"contained"} onClick={onClose} fullWidth>
				OK
			</Button>
		</Dialog>
	);
}

export default ProfileModal;
