import * as React from "react";
import {
	Grid,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AXIOS_METHOD, useApi } from "../hooks/useApi";
import { useState } from "react";

function SearchModal({ onClose }) {
	const [searchedName, setSearchedName] = useState("");
	const [searchResult, setSearchResult] = useState("");
	const [userList] = useApi(AXIOS_METHOD.POST, `/user/list`, {
		prefix: "",
		limit: 200,
		cursor: "",
	});

	const handleSearch = (expression) => {
		const searchedUser = userList.users.find(
			(item) => item.name === expression
		);

		if (searchedUser) {
			setSearchResult(`name: ${searchedUser.name} \nid: ${searchedUser.id}`);
		} else {
			setSearchResult("User not found");
		}
		setSearchedName("");
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch(searchedName);
		}
	};

	return (
		<Dialog open={true} onClose={onClose}>
			<DialogTitle style={{ textAlign: "center" }}>Search</DialogTitle>
			<DialogContent>
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<SearchIcon />
						<TextField
							id="search"
							name="search"
							placeholder="search"
							variant="standard"
							fullWidth
							onChange={(event) => setSearchedName(event.target.value)}
							onKeyPress={handleKeyPress}
							value={searchedName}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							onClick={() => handleSearch(searchedName)}
							fullWidth
						>
							Search
						</Button>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							disabled
							multiline
							minRows={"5"}
							name="result"
							type="text"
							value={searchResult}
							sx={{ mb: 2, border: 0 }}
						/>
					</Grid>
				</Grid>

				<Button variant={"contained"} onClick={onClose} fullWidth>
					Close
				</Button>
			</DialogContent>
		</Dialog>
	);
}

export default SearchModal;
