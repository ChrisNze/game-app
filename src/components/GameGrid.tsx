import useGame from "../hooks/useGame";
import { Genre } from "../hooks/useGenre";
import { PlatForm } from "../hooks/usePlatForm";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
	darkMode: boolean;
	selectedGenre: Genre | null;
	selectedPlatForm: PlatForm | null;
	inputValue: string;
	// testing: number;
}

const GameGrid = ({ darkMode, selectedGenre, selectedPlatForm, inputValue }: Props) => {
	const { game, error, loading } = useGame(
		//Arrays to be passed. If the value passed is a number, dont include it here but include it in params
		selectedGenre,
		selectedPlatForm,
		{
			//Parameters for our Search or Filter. Just go to the API site and look for these parameters. You dont need to cram it
			params: {
				genres: selectedGenre?.id,
				platforms: selectedPlatForm?.id,
				search: inputValue,
				// page_size: testing
			},
		},
		//Dependencies. All the parameters in the params must be listed in this array
		[
			selectedGenre?.id,
			selectedPlatForm?.id,
			inputValue,
			// testing
		]
	);
	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
	// console.log("game", game);

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
