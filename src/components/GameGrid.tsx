import useGame from "../hooks/useGame";
import { Genre } from "../hooks/useGenre";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
	darkMode: boolean;
	selectedGenre: Genre | null;
}

const GameGrid = ({ darkMode, selectedGenre }: Props) => {
	const { game, error, loading } = useGame(selectedGenre, { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log("game", game);

	if (error) {
		return (
			<div className="row g-4 d-flex">
				<p className="text-danger">{error}</p>
				{skeleton.map((skeleton) => (
					<GameCardSkeleton key={skeleton} />
				))}
			</div>
		);
	}

	return (
		<>
			{/* {error && } */}
			<div className="row g-4">
				{loading && skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
				{game.map((game) => (
					<GameCard key={game.id} game={game} darkMode={darkMode} />
				))}
			</div>
		</>
	);
};

export default GameGrid;
