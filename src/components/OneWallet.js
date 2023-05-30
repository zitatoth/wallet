import React from "react";
import {
	Button,
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Grid,
} from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DetailsIcon from "@mui/icons-material/Details";
import Balance from "./Balance";
import { useNavigate } from "react-router-dom";

function OneWallet({ id, name, balance, onDelete }) {
	const navigate = useNavigate();

	return (
		<Grid item xs={6} md={4} lg={3}>
			<Card
				elevation={4}
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					marginTop: 20,
				}}
			>
				<CardHeader
					title={name}
					sx={{ color: "#1976D2", textAlign: "center" }}
				></CardHeader>
				<CardContent sx={{ width: "100%", padding: 0 }}>
					<Balance balance={balance} />
				</CardContent>

				<CardActions>
					<Button
						fullWidth
						variant={"outlined"}
						startIcon={<DetailsIcon />}
						onClick={() => {
							navigate(`/wallet/${id}`);
						}}
					>
						Details
					</Button>
					<Button
						variant={"outlined"}
						color={"error"}
						startIcon={<RestoreFromTrashIcon />}
						fullWidth
						onClick={onDelete}
					>
						Delete
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default OneWallet;
