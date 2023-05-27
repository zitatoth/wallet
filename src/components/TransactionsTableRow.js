import * as React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

function TransactionsTableRow() {
	return (
		<TableRow sx={{ borderBottom: 1 }}>
			<TableCell style={{ width: "20%" }} align="center">
				dátum
			</TableCell>
			<TableCell style={{ width: "20%" }} align="center">
				összeg
			</TableCell>
			<TableCell style={{ width: "20%" }} align="center">
				megnevezés
			</TableCell>
			<TableCell style={{ width: "20%" }} align="center">
				megjegyzés
			</TableCell>
			<TableCell style={{ width: "10%" }} align="center">
				törlés
			</TableCell>
		</TableRow>
	);
}

export default TransactionsTableRow;
