export function Dislike(
	clickDislike,
	setClickDislike,
	clickLike,
	setClickLike,
	movies,
	setMovies,
	id
) {
	const liked = movies.slice();
	const elementLiked = movies.find((element) => element.id === id);

	if (clickLike) {
		--elementLiked.likes;
		clickDislike ? --elementLiked.dislikes : ++elementLiked.dislikes;
		setMovies(liked);
		setClickLike(!clickLike);
		setClickDislike(!clickDislike);
	} else {
		clickDislike ? --elementLiked.dislikes : ++elementLiked.dislikes;
		setMovies(liked);
		setClickDislike(!clickDislike);
	}
}
