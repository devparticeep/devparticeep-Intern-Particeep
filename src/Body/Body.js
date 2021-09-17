import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function Body(movies, CardBody) {
	if (movies.length === 0) {
		return (
			<Container fluid>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Card sx={{ minWidth: 1200, minHeight: 500 }}>
							<CardContent>
								<Typography
									className="mt-5 pt-5 text-danger text-center fs-1"
									variant="h5"
									component="div"
								>
									Nothing to show !
								</Typography>
							</CardContent>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	} else if (movies[0].id === "") {
		return <CircularProgress />;
	} else {
		return CardBody;
	}
}
