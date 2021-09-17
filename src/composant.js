import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material";
import {
	CardActions,
	Avatar,
	IconButton,
	Typography,
	LinearProgress,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Remove } from "./Actions/Remove";
import { Like } from "./Actions/Like";
import { Dislike } from "./Actions/Dislike";

function RecipeReviewCard({
	id,
	title,
	category,
	likes,
	dislikes,
	movies,
	setMovies,
}) {
	const [clickLike, setClickLike] = useState(false);
	const [clickDislike, setClickDislike] = useState(false);
	const spaces = () => {
		let tabs = [];
		for (let i = 0; i < 17; i++) {
			tabs = [...tabs, <>&nbsp;</>];
		}
		return tabs;
	};

	const mille = (value) => {
		if (value > 1000) {
			return `${Math.round((value / 1000) * 10) / 10}K`;
		} else {
			return value;
		}
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: pink[900] }} aria-label="recipe">
						{category[0]}
					</Avatar>
				}
				action={
					<IconButton
						onClick={() => Remove(id, movies, setMovies)}
						aria-label="settings"
					>
						<DeleteOutlineIcon fontSize="large" />
					</IconButton>
				}
				title={title}
				subheader={category}
			/>
			<CardMedia
				component="img"
				height="194"
				image={
					title !== ""
						? require(`./images/${("" + title)
								.toLowerCase()
								.split(" ")
								.join("")}.jpg`).default
						: "./images/seven.jpg"
				}
				alt="Title"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					<span className="fw-bold">{title}&nbsp;</span>is a good film to see.
					Personally he gave me a lot of motivation to put my potential into
					practice and overcome the challenges.{spaces()}
				</Typography>
			</CardContent>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<CardActions disableSpacing>
						<IconButton
							onClick={() =>
								Like(
									clickDislike,
									setClickDislike,
									clickLike,
									setClickLike,
									movies,
									setMovies,
									id
								)
							}
							aria-label="like"
						>
							{clickLike ? (
								<ThumbUpIcon fontSize="large" />
							) : (
								<ThumbUpOutlinedIcon fontSize="large" />
							)}
						</IconButton>
						<span className="text-secondary">{mille(likes)}</span>
						<IconButton
							onClick={() =>
								Dislike(
									clickDislike,
									setClickDislike,
									clickLike,
									setClickLike,
									movies,
									setMovies,
									id
								)
							}
							aria-label="dislike"
						>
							{clickDislike ? (
								<ThumbDownIcon fontSize="large" />
							) : (
								<ThumbDownOutlinedIcon fontSize="large" />
							)}
						</IconButton>
						<span className="text-secondary">{mille(dislikes)}</span>
					</CardActions>
					<LinearProgress
						sx={{ bgcolor: pink[900] }}
						variant="determinate"
						value={(likes / (likes + dislikes)) * 100}
					/>
				</Col>
			</Row>
		</Card>
	);
}

export default RecipeReviewCard;
