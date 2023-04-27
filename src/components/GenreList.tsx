import useGenre, { Genre } from "../hooks/useGenre";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { genre, error, loading } = useGenre();
	const genreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	console.log(genre);

	if (error) {
		return (
			<div className="">
				<p className="text-danger">{error}</p>
				{genreSkeleton.map((genre) => (
					<GenreSkeleton key={genre} />
				))}
			</div>
		);
	}

	// if (loading) {
	// 	return (
	// 		<div className="spinner-border mx-auto" role="status" style={{ width: "3rem", height: "3rem" }}>
	// 			<span className="visually-hidden ">Loading...</span>
	// 		</div>
	// 	);
	// }

	return (
		<ul className="list-group d-flex">
			{loading && genreSkeleton.map((genre) => <GenreSkeleton key={genre} />)}
			{genre.map((genre) => (
				<li key={genre.id} className="list-group-items d-flex align-items-center pb-4" style={{ cursor: "pointer" }}>
					<img src={genre.image_background} style={{ width: "4rem", height: "3rem", borderRadius: "8px", marginRight: "10px" }} />
					<span
						className="fs-3 genre_name"
						onClick={() => onSelectGenre(genre)}
						style={{ transform: genre.id === selectedGenre?.id ? "scale(1.1)" : "scale(1)" }}>
						{genre.name}
					</span>
				</li>
			))}
		</ul>
	);
};

export default GenreList;
