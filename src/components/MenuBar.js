import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../hooks/useAuth";
import { useModals, MODALS } from "../hooks/useModal";

function MenuBar() {
	const [auth, setAuth] = React.useState(true);
	const { handleLoginResult, authToken, logout } = useAuth();
	const { showModal } = useModals();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
						My wallets
					</Typography>
					{authToken === false && (
						<>
							<LoginIcon
								sx={{ flexGrow: 1, cursor: "pointer" }}
								onClick={() => {
									showModal(MODALS.LOGIN);
								}}
							/>
						</>
					)}

					{authToken !== false && (
						<>
							<div>
								<SearchIcon
									sx={{ flexGrow: 1, mr: 3, cursor: "pointer" }}
									onClick={() => {
										showModal(MODALS.SEARCH);
									}}
								/>
								<AccountCircle
									sx={{ flexGrow: 1, mr: 3, cursor: "pointer" }}
									onClick={() => {
										showModal(MODALS.PROFILE);
									}}
								/>
								<LogoutIcon
									sx={{ flexGrow: 1, cursor: "pointer" }}
									onClick={logout}
								/>
							</div>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default MenuBar;
