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
import { useNavigate } from "react-router-dom";
import SmallWallet from "./SmallWallet";

function OneWallet({ id, name, balance, onDelete, transactionsResult }) {
	const navigate = useNavigate();
	let income = 0;
	let outcome = 0;
	transactionsResult?.transactions.forEach((item) => {
		item.amount > 0 ? (income += item.amount) : (outcome += item.amount);
	});

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
					<SmallWallet balance={balance} />
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
