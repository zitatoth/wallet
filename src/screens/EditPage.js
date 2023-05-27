import { Grid, Typography, Box, Paper, CircularProgress } from "@mui/material";
import SimpleAppBarEdit from "../components/SimpleAppBarEdit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Balance from "../components/Balance";
import Share from "../components/Share";
import TransactionsTable from "../components/TransactionsTable";
import Description from "../components/Description";
import { useNavigate, useParams } from "react-router-dom";
import { AXIOS_METHOD, useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import LoadingBlock from "../components/LoadingBlock";

function EditPage() {
	const { authToken } = useAuth();
	const navigate = useNavigate();
	const { id } = useParams();
	const [wallet, loading, error] = useApi(AXIOS_METHOD.GET, `/wallet/${id}`);

	if (loading === false && error !== false) {
		navigate("/Page404");
		return null;
	}

	if (loading === true) {
		return <LoadingBlock />;
	}

	return (
		<Grid item xs={12} maxWidth={"lg"}>
			<Grid container item>
				<SimpleAppBarEdit name={wallet.name} />
			</Grid>
			<Grid container item>
				<Grid item xs={12} md={6} sx={{ padding: 2, width: "100%" }}>
					<Grid item sx={{ width: "100%" }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "end",
							}}
						>
							<Box
								flexGrow={1}
								color="#1976D2"
								sx={{ display: "flex", alignItems: "center", fontSize: 24 }}
							>
								Transactions
							</Box>
							<Box>
								<AddCircleIcon
									color="primary"
									sx={{ cursor: "pointer" }}
									onClick={() => {
										navigate("/newtransaction");
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item>
						<TransactionsTable />
					</Grid>
				</Grid>
				<Grid item xs={12} md={6} sx={{ padding: 2 }}>
					<Grid item xs={12} sx={{ width: "100%" }}>
						<Description description={wallet.description} />
					</Grid>
					<Grid container>
						<Grid item xs={7}>
							<Typography
								variant="body"
								component="div"
								color="#1976D2"
								fontSize={24}
							>
								Share
							</Typography>
							<Share access={wallet?.access || []} />
						</Grid>
						<Grid item xs={5}>
							<Typography
								variant="body"
								component="div"
								color="#1976D2"
								fontSize={24}
							>
								Balance
							</Typography>
							<Paper variant="outlined" sx={{ mt: 1, borderRadius: 1 }}>
								<Balance balance={wallet.balance} />
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default EditPage;
