import * as React from "react";
import { TableCell, TableRow } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

function formatDate(dateString) {
	return new Date(dateString).toLocaleDateString();
}

function TransactionsTableRow({ date, amount, title, description, onDelete }) {
	return (
		<TableRow sx={{ borderBottom: 1 }}>
			<TableCell style={{ width: "20%" }} align="center">
				{formatDate(date)}
			</TableCell>
			<TableCell
				style={{ width: "20%", color: amount < 0 ? "#D32F2F" : "#99d98c" }}
				align="center"
			>
				{amount}
			</TableCell>
			<TableCell style={{ width: "20%" }} align="center">
				{title}
			</TableCell>
			<TableCell style={{ width: "20%" }} align="center">
				{description}
			</TableCell>
			<TableCell style={{ width: "10%" }} align="center">
				<RestoreFromTrashIcon sx={{ color: "#D32F2F" }} onClick={onDelete} />
			</TableCell>
		</TableRow>
	);
}

export default TransactionsTableRow;
