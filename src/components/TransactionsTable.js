import * as React from "react";
import {
	Table,
	TableRow,
	TableCell,
	TableHead,
	Box,
	TableBody,
} from "@mui/material";
import TransactionsTableRow from "./TransactionsTableRow";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";
import { useModals, MODALS } from "../hooks/useModal";
import LoadingBlock from "../components/LoadingBlock";

function TransactionsTable({
	walletId,
	transactionsResult,
	loading,
	error,
	refreshPage,
}) {
	const { showModal } = useModals();

	function onDelete(transactionId) {
		showModal(MODALS.YESNO, {
			message: "Are you sure?",
			onConfirmed: () => {
				doApiCall(
					AXIOS_METHOD.DELETE,
					`/transaction/${transactionId}`,
					(_unusedDeletedItem) => {
						refreshPage();
					},
					(message) => {
						showModal(MODALS.ERROR, { message });
					},
					{ transactionId }
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
		<Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
			<Table sx={{ width: "100%" }}>
				<TableHead style={{ fontStyle: "italic" }}>
					<TableRow sx={{ borderBottom: 1 }}>
						<TableCell style={{ width: "20%" }} align="center">
							Dátum
						</TableCell>
						<TableCell style={{ width: "20%" }} align="center">
							Összeg
						</TableCell>
						<TableCell style={{ width: "20%" }} align="center">
							Megnevezés
						</TableCell>
						<TableCell style={{ width: "20%" }} align="center">
							Megjegyzés
						</TableCell>
						<TableCell style={{ width: "10%" }} align="center">
							Törlés
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{loading === false &&
						transactionsResult?.transactions.map((item) => {
							return (
								<TransactionsTableRow
									walletId={walletId}
									key={item?.id}
									id={item?.id}
									date={item?.created_at}
									amount={item?.amount}
									title={item?.title}
									description={item?.extra?.description}
									onDelete={() => onDelete(item?.id)}
								/>
							);
						})}
				</TableBody>
			</Table>
		</Box>
	);
}

export default TransactionsTable;
