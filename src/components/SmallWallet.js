import React from "react";
import { CardMedia, Box } from "@mui/material";
import wallet from "../pictures/wallet.svg";

function SmallWallet({ balance }) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
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
	);
}

export default SmallWallet;
