import * as React from "react";
import { Grid } from "@mui/material";
import SubmitButton from "../components/SubmitButton";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";
import { useModals, MODALS } from "../hooks/useModal";
import { useAuth } from "../hooks/useAuth";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";

function validateLoginForm(values) {
	const errors = {};
	if (!values.name) {
		errors["name"] = "Username is required";
	} else if (!values.password) {
		errors["password"] = "Password is required";
	}
	return errors;
}

function LoginModal({ onClose }) {
	const { showModal } = useModals();
	const { handleLoginResult } = useAuth();

	return (
		<Dialog open={true} onClose={onClose}>
			<DialogTitle style={{ textAlign: "center" }}>Login</DialogTitle>
			<DialogContent>
				<Formik
					initialValues={{}}
					validate={validateLoginForm}
					onSubmit={(value, { setFieldError, setSubmitting }) => {
						setSubmitting(true);
						doApiCall(
							AXIOS_METHOD.POST,
							"/login",
							(data) => {
								handleLoginResult(data);
								onClose();
							},
							(apiError) => {
								setFieldError("password", apiError);
								setSubmitting(false);
							},
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
								<Field component={SubmitButton} label={"Login"} />
							</Grid>
							<Grid item xs={12}>
								<Typography
									style={{
										textAlign: "center",
										fontSize: 12,
										cursor: "pointer",
									}}
									onClick={() => {
										showModal(MODALS.REG);
									}}
								>
									registration
								</Typography>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</DialogContent>
		</Dialog>
	);
}

export default LoginModal;
