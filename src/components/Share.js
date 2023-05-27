import * as React from "react";
import { Grid, Box } from "@mui/material";
import { Formik, Form } from "formik";
import SharedWith from "./SharedWith";
import ShareWith from "./ShareWith";

function Share({ access }) {
	return (
		<Box style={{ width: "100%" }}>
			<Formik>
				<Form>
					<Grid container spacing={2}>
						<ShareWith access={access} />
						<SharedWith access={access} />
					</Grid>
				</Form>
			</Formik>
		</Box>
	);
}

export default Share;
