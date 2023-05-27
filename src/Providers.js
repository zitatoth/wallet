import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuth";
import { ModalContextProvider } from "./hooks/useModal";

const theme = createTheme({});

function Providers({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<ModalContextProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</ModalContextProvider>
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default Providers;
