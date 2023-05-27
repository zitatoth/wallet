import { Grid } from "@mui/material";
import OneWallet from "../components/OneWallet";
import MenuBar from "../components/MenuBar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useModals, MODALS } from "../hooks/useModal";
import { AXIOS_METHOD, doApiCall, useApi } from "../hooks/useApi";
import LoadingBlock from "../components/LoadingBlock";

function MainPage() {
	const { showModal } = useModals();

	const [dataResult, loading, error, refreshPage] = useApi(
		AXIOS_METHOD.GET,
		"/wallets"
	);

	function onDelete(id) {
		showModal(MODALS.YESNO, {
			message: "Are you sure?",
			onConfirmed: () => {
				doApiCall(
					AXIOS_METHOD.DELETE,
					`/wallet/${id}`,
					(_unusedDeletedItem) => {
						refreshPage();
					},
					(message) => {
						showModal(MODALS.ERROR, { message });
					},
					{ id }
				);
			},
		});
	}

	if (loading === true) {
		return <LoadingBlock />;
	}

	if (loading === false && error !== false) {
		return null;
	}

	return (
		<Grid container>
			<MenuBar />
			<Grid item xs={12}>
				<AddCircleIcon
					color="primary"
					sx={{
						fontSize: 50,
						cursor: "pointer",
						mt: 2,
					}}
					onClick={() => {
						showModal(MODALS.NEWWALLET);
					}}
				/>
			</Grid>
			<Grid container spacing={2}>
				{loading === false &&
					dataResult?.map((item) => {
						return (
							<OneWallet
								key={item?.id}
								id={item?.id}
								name={item?.name}
								description={item?.description}
								balance={item?.balance}
								onDelete={() => onDelete(item?.id)}
							/>
						);
					})}
			</Grid>
		</Grid>
	);
}

export default MainPage;
