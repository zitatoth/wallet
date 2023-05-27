import { Grid, CircularProgress } from "@mui/material";

function LoadingBlock() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sx={{ textAlign: "center", margin: 20 }}>
				<CircularProgress />
			</Grid>
		</Grid>
	);
}

export default LoadingBlock;
