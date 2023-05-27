import * as React from "react";
import MainPage from "./screens/MainPage";
import EditPage from "./screens/EditPage";
import NewTransaction from "./screens/NewTransaction";
import Page404 from "./screens/Page404";
import Providers from "./Providers";
import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import StartPage from "./screens/StartPage";
import { useAuth } from "./hooks/useAuth";

function ProtectedPage({ children }) {
	const { authToken } = useAuth();

	if (authToken === false) {
		return <Navigate to="/"></Navigate>;
	}
	return children;
}

export function NavigateToMain({ children }) {
	const { authToken } = useAuth();

	if (authToken !== false) {
		return <Navigate to="/wallets"></Navigate>;
	}
	return children;
}

function App() {
	return (
		<Providers>
			<Container maxWidth={"lg"}>
				<Routes>
					<Route
						path="/"
						exact
						element={
							<NavigateToMain>
								<StartPage />
							</NavigateToMain>
						}
					/>
					<Route
						path="/wallets"
						exact
						element={
							<ProtectedPage>
								<MainPage />
							</ProtectedPage>
						}
					/>
					<Route path="/wallet/:id" element={<EditPage />} />
					<Route path="/newtransaction" element={<NewTransaction />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Container>
		</Providers>
	);
}

export default App;
