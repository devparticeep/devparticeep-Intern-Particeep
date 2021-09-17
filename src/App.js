import React, { Suspense, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dark, Light } from "./styles";
import { CircularProgress, Avatar } from "@mui/material";
import { MaterialUISwitch } from "./Switch/Switch";
import { movies$ } from "./Movies/Movies";
import { Pagination } from "./Pagination/Pagination";
import { Body } from "./Body/Body";
import { HideAppBar } from "./AppBar/AppBar";

const RecipeReviewCard = React.lazy(() => import("./composant"));

export var uploadDat = () => {};

function App() {
	const [mode, setMode] = useState(true);
	const [movies, setMovies] = useState([
		{
			id: "",
			title: "",
			category: "",
			likes: 0,
			dislikes: 0,
		},
	]);
	const dark = mode ? `mt-5 mb-5 ${Dark()}` : `mt-5 mb-5 ${Light()}`;
	const [classes, setClasses] = useState(dark);

	useEffect(() => {
		setClasses(dark);
	}, [mode]);

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(12);
	const numberOfPages =
		movies.length % rowsPerPage === 0
			? movies.length / rowsPerPage
			: Math.floor(movies.length / rowsPerPage) + 1;

	useEffect(() => {
		Promise.race([movies$]).then((value) => {
			setMovies(value);
		});
	}, []);

	let elements = [];
	let Card = [];

	uploadDat = () => {
		Card = movies.map((value, index) => {
			if (
				rowsPerPage === 4 &&
				((page + 1) * 4 < index + 1 ||
					(page + 1) * 4 - 3 > index + 1 ||
					(page + 1) * (index + 1) > (page + 1) * 4)
			) {
				return false;
			} else if (
				rowsPerPage === 8 &&
				((page + 1) * 8 < index + 1 ||
					(page + 1) * 8 - 7 > index + 1 ||
					(page + 1) * (index + 1) > (page + 1) * 8)
			) {
				return false;
			}
			elements = [
				...elements,
				<Col>
					<RecipeReviewCard
						id={value.id}
						title={value.title}
						category={value.category}
						likes={value.likes}
						dislikes={value.dislikes}
						movies={movies}
						setMovies={setMovies}
					/>
				</Col>,
			];

			if ((index + 1) % 4 !== 0) {
				return false; // skip
			} else {
				const values = elements;
				elements = [];
				return (
					<Row key={index} className="mb-3">
						{values}
					</Row>
				);
			}
		});

		if (movies.length % 4 !== 0) {
			const restElements = movies.slice(
				-(movies.length - 4 * Math.floor(movies.length / 4))
			);
			const rest = restElements.map((value, index) => (
				<Col key={index}>
					<RecipeReviewCard
						id={value.id}
						title={value.title}
						category={value.category}
						likes={value.likes}
						dislikes={value.dislikes}
						movies={movies}
						setMovies={setMovies}
					/>
				</Col>
			));
			if (rowsPerPage === 4 || rowsPerPage === 8) {
				if (page === numberOfPages) {
					Card = [...Card, <Row className="mb-3 d-flex flex-row">{rest}</Row>];
				}
			} else {
				Card = [...Card, <Row className="mb-3 d-flex flex-row">{rest}</Row>];
			}
		}
	};

	uploadDat();

	return (
		<HideAppBar>
			<Container className={classes} fluid>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Suspense fallback={<CircularProgress />}>
							<Row className="mb-3 justify-content-md-center">
								<Col md="auto">
									<Pagination
										count={movies.length}
										page={page}
										setPage={setPage}
										rowsPerPage={rowsPerPage}
										setRowsPerPage={setRowsPerPage}
										mode={mode}
									/>
								</Col>
								<Col md={1}>
									<MaterialUISwitch
										defaultChecked
										checked={mode}
										onChange={() => {
											setMode(!mode);
										}}
									/>
								</Col>
								<Col md={1}>
									<Avatar
										sx={{ width: "80px", height: "80px" }}
										aria-label="recipe"
									>
										<img
											width={80}
											height={80}
											src={require("./images/Aymane_REIDA.jpg").default}
										></img>
									</Avatar>
								</Col>
							</Row>
							{Body(movies, Card)}
							<Row className="justify-content-md-center">
								<Col md="auto">
									<Pagination
										count={numberOfPages}
										page={page}
										setPage={setPage}
										rowsPerPage={rowsPerPage}
										setRowsPerPage={setRowsPerPage}
										mode={mode}
									/>
								</Col>
								<Col md={1}>
									<MaterialUISwitch
										defaultChecked
										checked={mode}
										onChange={() => {
											setMode(!mode);
										}}
									/>
								</Col>
							</Row>
						</Suspense>
					</Col>
				</Row>
			</Container>
		</HideAppBar>
	);
}

export default App;
