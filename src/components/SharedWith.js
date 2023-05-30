import * as React from "react";
import { Grid, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";

function SharedWith({ access }) {
	const { id } = useParams();
	const [user, setUser] = useState("");
	const handleChange = (event) => {
		setUser(event.target.value);
		console.log(user);
	};

	return (
		<Grid
			item
			xs={12}
			flexGrow={1}
			color="#1976D2"
			sx={{
				display: "flex",
				alignItems: "center",
				fontSize: 24,
				mt: 3,
				mr: 3,
			}}
		>
			<Box flexGrow={1}>
				<FormControl sx={{ width: "98%" }} size="small">
					<InputLabel id="sharedWith">Shared with</InputLabel>
					<Select
						labelId="sharedWith"
						id="sharedWith"
						label="sharedWith"
						value={user}
						onChange={handleChange}
					>
						{access?.map((item) => {
							return (
								<MenuItem key={item?.id} value={item.id}>
									{item?.name || "no user"}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Box>

			<Box>
				<RemoveCircleIcon
					color="primary"
					sx={{ fontSize: 24, cursor: "pointer" }}
					onClick={() => {
						doApiCall(
							AXIOS_METHOD.POST,
							`/wallet/${id}/remove_access`,
							(_unusedNewDescription) => {
								console.log("sikerült");
							},
							(message) => {
								console.log("nem sikerült");
							},
							{
								user_id: user,
							}
						);
					}}
				/>
			</Box>
		</Grid>
	);
}

export default SharedWith;
