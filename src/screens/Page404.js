import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@mui/material";
import error from "../pictures/error.jpg";

function Page404() {
	const navigate = useNavigate();

	return (
		<Container
			maxWidth="lg"
			style={{
				backgroundImage: `url(${error})`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Grid
				container
				spacing={2}
				style={{
					position: "relative",
					textAlign: "center",
					alignItems: "center",
					minHeight: "100vh",
					color: "#fff",
				}}
			>
				<Grid item xs={12}>
					<Typography variant="h1">404 ERROR</Typography>
					<Typography variant="h4">
						there's only an empty wallet here
					</Typography>
					<Button
						variant={"contained"}
						onClick={() => {
							navigate("/");
						}}
						sx={{ marginTop: 2 }}
					>
						Go to main page
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Page404;
