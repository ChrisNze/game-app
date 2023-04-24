import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
interface Props {
	darkMode: boolean;
}

const GameGrid = ({ darkMode }: Props) => {
	const { game, error } = useGame();
	return (
		<>
			{error && <p className="text-danger">{error}</p>}

			<div className="row g-4">
				{game.map((game) => (
					<GameCard key={game.id} game={game} darkMode={darkMode} />
				))}
			</div>
		</>
	);
};

export default GameGrid;
