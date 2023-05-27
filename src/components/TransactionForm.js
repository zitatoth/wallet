import * as React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TransactionForm() {
	return (
		<Box style={{ width: "50%", margin: "0 auto", marginTop: 40 }}>
			<Formik
				initialValues={{
					amount: "",
					title: "",
					description: "",
				}}
			>
				<Form>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<div>
								<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
									<InputLabel id="inorout">in / out</InputLabel>
									<Select
										labelId="inorout"
										id="inoroutselect"
										value={"income/outcome"}
										label="in / out"
									>
										<MenuItem>income</MenuItem>
										<MenuItem>outcome</MenuItem>
									</Select>
								</FormControl>
							</div>
						</Grid>
						<Grid item xs={12}>
							<Field
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
							<Button
								size={"large"}
								type="submit"
								fullWidth
								variant={"contained"}
							>
								Add
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</Box>
	);
}

export default TransactionForm;
