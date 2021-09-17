import React from "react";
import { TablePagination } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { uploadDat } from "../App";

export function Pagination({
	count,
	page,
	setPage,
	rowsPerPage,
	setRowsPerPage,
	mode,
}) {
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
		uploadDat();
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(event.target.value);
		setPage(0);
		uploadDat();
	};

	console.log("lool", count);

	const classes = mode ? "text-white" : "text-dark";

	return (
		<TablePagination
			className={classes}
			component="div"
			count={count}
			page={page}
			SelectProps={{
				inputProps: {
					"aria-label": "rows per page",
				},
				native: true,
			}}
			onPageChange={handleChangePage}
			rowsPerPage={rowsPerPage}
			rowsPerPageOptions={[
				{ value: 4, label: "4" },
				{ value: 8, label: "8" },
				{ value: 12, label: "12" },
			]}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	);
}
