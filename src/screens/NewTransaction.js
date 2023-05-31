import { Grid } from "@mui/material";
import SimpleAppBarNewT from "../components/SimpleAppBarNewT";
import TransactionForm from "../components/TransactionForm";
import { useParams } from "react-router-dom";

function NewTransaction() {
	const { id } = useParams();

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
			<TransactionForm id={id} />
		</Grid>
	);
}

export default NewTransaction;
