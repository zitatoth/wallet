import { Grid } from "@mui/material";
import SimpleAppBarNewT from "../components/SimpleAppBarNewT";
import TransactionForm from "../components/TransactionForm";

function NewTransaction() {
	return (
		<Grid
			container
			item
			xs={12}
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<SimpleAppBarNewT />
			<TransactionForm />
		</Grid>
	);
}

export default NewTransaction;
