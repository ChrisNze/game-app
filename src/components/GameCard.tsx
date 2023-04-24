import useGame, { Game } from "../hooks/useGame";
interface Props {
	game: Game;
	darkMode: boolean;
}

const GameCard = ({ game, darkMode }: Props) => {
	return (
		<>
			<div className="col-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card" style={{ backgroundColor: darkMode ? "rgba(0,0,0,.2)" : "transparent" }}>
					<img src={game.background_image} className="card-img-top" alt="Image" />
					<div className="card-body">
						<h1 className="card-title">{game.name}</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default GameCard;
