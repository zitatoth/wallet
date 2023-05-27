import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function SimpleAppBarNewT() {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<ArrowBackIcon
						sx={{ flexGrow: 1, cursor: "pointer" }}
						onClick={() => {
							navigate("/");
						}}
					/>
					<Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
						New transaction
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default SimpleAppBarNewT;
