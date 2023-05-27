import * as React from "react";
import { Grid, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { AXIOS_METHOD, useApi } from "../hooks/useApi";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

function SearchModal({ onClose }) {
	const [searchedName, setSearchedName] = useState("");
	const [searchResult, setSearchResult] = useState("");
	const [userList] = useApi(AXIOS_METHOD.POST, `/user/list`, {
		prefix: "",
		limit: 200,
		cursor: "",
	});
	console.log(userList);

	const handleSearch = (searchedName, result) => {
		console.log(searchedName);
		const searchedUser = userList.users.find(
			(item) => item.name === searchedName
		);
		console.log(searchedUser);

		if (searchedUser) {
			setSearchResult(`name: ${searchedUser.name} \nid: ${searchedUser.id}`);
		} else {
			setSearchResult("User not found");
		}
		//setSearchedName("");
	};
	return (
		<Dialog open={true} onClose={onClose}>
			<DialogTitle style={{ textAlign: "center" }}>Search</DialogTitle>
			<DialogContent>
				<Formik
					initialValues={{
						search: "",
						result: "",
					}}
					onSubmit={(values) => handleSearch(values.search)}
				>
					<Form>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Search>
									<SearchIconWrapper>
										<SearchIcon />
									</SearchIconWrapper>
									<StyledInputBase
										value={searchedName}
										name="search"
										placeholder="Search…"
										inputProps={{ "aria-label": "search" }}
										onChange={(event) => {
											event.key === "Enter"
												? handleSearch(searchedName)
												: setSearchedName(event.target.value);
											console.log(event.target.value);
										}}
									/>
								</Search>
								<Button
									variant="contained"
									onClick={() => {
										handleSearch(searchedName);
									}}
									fullWidth
								>
									Search
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Field
									fullWidth
									component={TextField}
									value={searchResult}
									multiline
									disabled
									minRows={"5"}
									name="result"
									type="text"
									sx={{ mb: 2, border: 0 }}
								/>
							</Grid>
						</Grid>
					</Form>
				</Formik>

				<Button variant={"contained"} onClick={onClose} fullWidth>
					Close
				</Button>
			</DialogContent>
		</Dialog>
	);
}

export default SearchModal;
