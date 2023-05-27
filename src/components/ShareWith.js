import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AXIOS_METHOD, doApiCall, useApi } from "../hooks/useApi";
import { useState } from "react";
import { Grid, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useParams } from "react-router-dom";

function ShareWith() {
	const { id } = useParams();
	const [userList] = useApi(AXIOS_METHOD.POST, `/user/list`, {
		prefix: "",
		limit: 200,
		cursor: "",
	});
	console.log(userList);

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
				mt: 1,
				mr: 3,
			}}
		>
			<Box flexGrow={1}>
				<FormControl sx={{ width: "98%" }} size="small">
					<InputLabel id="shareWith">Share with</InputLabel>
					<Select
						labelId="shareWith"
						id="shareWith"
						label="shareWith"
						value={user}
						onChange={handleChange}
					>
						{userList?.users?.map((item) => {
							return (
								<MenuItem key={item.id} value={item.id}>
									{item.name || "no name"}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Box>

			<Box>
				<AddCircleIcon
					color="primary"
					sx={{ fontSize: 24, cursor: "pointer" }}
					onClick={() => {
						doApiCall(AXIOS_METHOD.POST, `/wallet/${id}/grant_access`, {
							user_id: user,
						});
					}}
				/>
			</Box>
		</Grid>
	);
}

export default ShareWith;
