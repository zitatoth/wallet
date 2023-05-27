import { Grid, Typography } from "@mui/material";
import SubmitButton from "../components/SubmitButton";

import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, CheckboxWithLabel } from "formik-mui";
import { useAuth } from "../hooks/useAuth";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";

function validateUsername(name) {
	if (!name) {
		return "Username is required";
	} else if (name.length < 3 || name.length > 10) {
		return "Username must be between 3 and 20 characters";
	}
}

function validateRegForm(values) {
	const errors = {};
	if (!values.password) {
		errors["password"] = "Password is required";
	} else if (values.password.length < 5) {
		errors["password"] = "Password must be at least 5 characters";
	} else if (!values.password2) {
		errors["password2"] = "Re-enter password is required";
	} else if (values.password !== values.password2) {
		errors["password2"] = "Passwords do NOT match!";
	}
	return errors;
}

function RegModal({ onClose }) {
	const { handleLoginResult } = useAuth();

	return (
		<Dialog open={true} onClose={onClose}>
			<DialogTitle style={{ textAlign: "center" }}>Registration</DialogTitle>
			<DialogContent>
				<Formik
					initialValues={{ accept: false }}
					validate={validateRegForm}
					onSubmit={(value, { setFieldError, setSubmitting }) => {
						setSubmitting(true);
						const onFailure = (apiError) => {
							setFieldError("name", apiError);
							setSubmitting(false);
						};

						doApiCall(
							AXIOS_METHOD.POST,
							"/reg",
							(_unusedRegData) => {
								doApiCall(
									AXIOS_METHOD.POST,
									"/login",
									(data) => {
										handleLoginResult(data);
										setSubmitting(false);
										onClose();
									},
									onFailure,
									value
								);
							},
							onFailure,
							value
						);
					}}
				>
					<Form>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Field
									fullWidth
									component={TextField}
									name="name"
									label="name"
									type="text"
									validate={validateUsername}
									style={{ marginTop: 10, marginBottom: 10 }}
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									fullWidth
									component={TextField}
									name="password"
									label="password"
									type="password"
									style={{ marginBottom: 10 }}
								/>
							</Grid>

							<Grid item xs={12}>
								<Field
									fullWidth
									component={TextField}
									name="password2"
									label="re-enter password"
									type="password"
									style={{ marginBottom: 10 }}
								/>
							</Grid>
							<Grid>
								<Field
									fullWidth
									type="checkbox"
									component={CheckboxWithLabel}
									name="accept"
									Label={{ label: "I accept the terms of use" }}
									validate={(value) =>
										value === false && "Accept of terms of use required"
									}
									style={{ marginLeft: 15 }}
								></Field>
								<Typography
									variant={"body2"}
									color={"error"}
									style={{ marginLeft: 15 }}
								>
									<ErrorMessage name={"accept"} />
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Field component={SubmitButton} label={"Registration"} />
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</DialogContent>
		</Dialog>
	);
}

export default RegModal;
