import * as React from "react";
import { Grid, Box } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";
import SubmitButton from "./SubmitButton";

function validateTitle(title) {
	if (!title) {
		return "Title is required";
	} else if (title.length < 3 || title.length > 50) {
		return "Title must be between 3 and 50 characters";
	}
}

function validateAmount(amount) {
	if (!amount) {
		return "Amount is required";
	}
}

function TransactionForm({ id }) {
	return (
		<Box style={{ width: "50%", margin: "0 auto", marginTop: 40 }}>
			<Formik
				initialValues={{
					amount: "",
					title: "",
					description: "",
				}}
				onSubmit={(value, { setFieldError, setSubmitting }) => {
					setSubmitting(true);
					doApiCall(
						AXIOS_METHOD.PUT,
						"/transactions",
						(_unusedNewWallet) => {
							setSubmitting(false);
						},
						(apiError) => {
							setFieldError("title", apiError);
							setSubmitting(false);
						},
						{
							wallet_id: id,
							title: value.title,
							amount: value.amount,
							extra: {
								description: value.description,
							},
						}
					);
				}}
			>
				<Form>
					<Grid container spacing={2}>
						<Grid item xs={12}></Grid>
						<Grid item xs={12}>
							<Field
								validate={validateAmount}
								fullWidth
								component={TextField}
								name="amount"
								label="amount"
								type="number"
								style={{ marginBottom: 10 }}
							/>
						</Grid>
						<Grid item xs={12}>
							<Field
								validate={validateTitle}
								fullWidth
								component={TextField}
								name="title"
								label="title"
								type="text"
								style={{ marginBottom: 10 }}
							/>
						</Grid>
						<Grid item xs={12}>
							<Field
								fullWidth
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
		</Box>
	);
}

export default TransactionForm;
