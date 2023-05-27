import * as React from "react";
import { Grid, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function SharedWith({ access }) {
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
					<Select labelId="sharedWith" id="sharedWith" label="sharedWith">
						{access?.map((item) => {
							return (
								<MenuItem key={item?.id}>{item?.name || "no user"} </MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Box>

			<Box>
				<RemoveCircleIcon
					color="primary"
					sx={{ fontSize: 24, cursor: "pointer" }}
				/>
			</Box>
		</Grid>
	);
}

export default SharedWith;
