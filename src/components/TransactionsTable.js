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

function TransactionsTable() {
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
					<TransactionsTableRow />
					<TransactionsTableRow />
					<TransactionsTableRow />
					<TransactionsTableRow />
				</TableBody>
			</Table>
		</Box>
	);
}

export default TransactionsTable;
