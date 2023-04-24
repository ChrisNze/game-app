import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
	darkMode: boolean;
}

const GameGrid = ({ darkMode }: Props) => {
	const { game, error, loading } = useGame();
	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(game);

	return (
		<>
			{error && <p className="text-danger">{error}</p>}

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
