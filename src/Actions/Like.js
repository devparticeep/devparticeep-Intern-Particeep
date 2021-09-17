export function Like(
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

	if (clickDislike) {
		--elementLiked.dislikes;
		clickLike ? --elementLiked.likes : ++elementLiked.likes;
		setMovies(liked);
		setClickDislike(!clickDislike);
		setClickLike(!clickLike);
	} else {
		clickLike ? --elementLiked.likes : ++elementLiked.likes;
		setMovies(liked);
		setClickLike(!clickLike);
	}
}
