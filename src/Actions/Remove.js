export function Remove(id, movies, setMovies) {
	const removed = movies.slice();
	const elementRemoved = movies.find((element) => element.id === id);
	const index = movies.indexOf(elementRemoved);
	if (index > -1) {
		removed.splice(index, 1);
	}
	setMovies(removed);
}
