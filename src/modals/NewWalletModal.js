import * as React from "react";
import { Grid } from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";
import SubmitButton from "../components/SubmitButton";

function validateTitle(name) {
	if (!name) {
		return "Title is required";
	} else if (name.length < 3 || name.length > 50) {
		return "Title must be between 3 and 50 characters";
	}
}

function validateDescription(description) {
	if (!description) {
		return "Description is required";
	}
}

function NewWalletModal({ onClose }) {
	return (
		<Dialog open={true} onClose={onClose}>
			<DialogTitle style={{ textAlign: "center" }}>New wallet</DialogTitle>
			<DialogContent>
				<Formik
					initialValues={{}}
					onSubmit={(value, { setFieldError, setSubmitting }) => {
						setSubmitting(true);
						doApiCall(
							AXIOS_METHOD.PUT,
							"/wallet",
							(_unusedNewWallet) => {
								setSubmitting(false);
								onClose();
								doApiCall(AXIOS_METHOD.GET, "/wallet");
							},
							(apiError) => {
								setFieldError("name", apiError);
								setSubmitting(false);
							},
							//formból érkező value:
							value
						);
					}}
				>
					<Form>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Field
									fullWidth
									validate={validateTitle}
									component={TextField}
									name="name"
									label="name"
									type="text"
									style={{ marginTop: 10, marginBottom: 10 }}
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									fullWidth
									validate={validateDescription}
									component={TextField}
									multiline
									minRows={"5"}
									name="description"
									label="description"
									type="text"
									style={{ marginBottom: 10 }}
								/>
							</Grid>
							<Grid item xs={12}>
								<Field component={SubmitButton} label={"Add"} />
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</DialogContent>
		</Dialog>
	);
}

export default NewWalletModal;
