import * as React from "react";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";
import { useParams } from "react-router-dom";

function Description({ description }) {
	const [newDescription, setNewDescription] = useState(description);
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();
	//console.log(newDescription);

	return (
		<Grid container item sx={{ width: "100%" }}>
			<Grid
				container
				item
				sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}
			>
				<Grid container item>
					<Grid
						item
						flexGrow={1}
						color="#1976D2"
						sx={{ display: "flex", alignItems: "center", fontSize: 24 }}
					>
						Description
					</Grid>
					<Grid item>
						{isEditing ? (
							<DoneIcon
								color="primary"
								sx={{
									display: "flex",
									alignItems: "center",
									fontSize: 24,
									cursor: "pointer",
								}}
								onClick={() => {
									setIsEditing(false);
									doApiCall(
										AXIOS_METHOD.PATCH,
										`/wallet/${id}`,
										(_unusedNewDescription) => {
											console.log("sikerült");
										},
										(message) => {
											console.log("nem sikerült");
										},
										{
											description: newDescription,
										}
									);
								}}
							/>
						) : (
							<EditIcon
								color="primary"
								sx={{
									display: "flex",
									alignItems: "center",
									fontSize: 24,
									cursor: "pointer",
								}}
								onClick={() => {
									setIsEditing(true);
								}}
							/>
						)}
					</Grid>
				</Grid>
				<Grid container item sx={{ mt: 2, mb: 2 }}>
					<TextField
						id="outlined-multiline-static"
						multiline
						rows={5}
						variant="outlined"
						sx={{ width: "100%" }}
						value={newDescription}
						disabled={!isEditing}
						onChange={(event) => {
							setNewDescription(event.target.value);
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Description;
