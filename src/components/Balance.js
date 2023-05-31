import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";
import wallet from "../pictures/wallet.svg";

function Balance({ balance, transactionsResult }) {
	let income = 0;
	let outcome = 0;

	transactionsResult?.transactions?.forEach((item) => {
		item.amount < 0 ? (outcome += item.amount) : (income += item.amount);
	});

	let incomeHeight = income / (income + Math.abs(outcome));
	let outcomeHeight = Math.abs(outcome) / (income + Math.abs(outcome));

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				width: "100%",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					width: "50%",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
				}}
			>
				<CardMedia
					component={"img"}
					image={wallet}
					height={120}
					alt="wallet"
					sx={{ width: "80%", objectFit: "contain" }}
				/>
				<Box
					fontSize={10}
					sx={{
						position: "absolute",
						color: "black",
						top: "50%",
						left: "45%",
						transform: "translateX(-50%)",
					}}
				>
					{balance} Ft
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-around",
					width: "40%",
					height: 100,
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<Box
						sx={{
							width: 20,
							height: outcomeHeight,
							backgroundColor: "#D32F2F",
						}}
					></Box>
					<Typography component="div" fontSize={8}>
						{outcome} Ft
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<Box
						sx={{
							width: 20,
							height: incomeHeight,
							backgroundColor: "#99d98c",
						}}
					></Box>
					<Typography component="div" fontSize={8}>
						{income} Ft
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Balance;
