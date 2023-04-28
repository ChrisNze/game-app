import { Game } from "../hooks/useGame";
import CriticScore from "./CriticScore";

import GameName from "./GameName";

interface Props {
	game: Game;
	darkMode: boolean;
}

const GameCard = ({ game, darkMode }: Props) => {
	return (
		<>
			<div className="col-12 col-sm-6 col-lg-3 ">
				<div className="card card_container" style={{ backgroundColor: darkMode ? "rgba(0,0,0,.2)" : "transparent" }}>
					<img src={game.background_image} className="card-img-top" alt="Image" />
					<div className="card-body">
						<h1 className="card-title">{game.name}</h1>
					</div>
					<div className="d-flex justify-content-between pe-5 ps-3 pb-5">
						<div className="card-text fs-4">
							{game.parent_platforms.map(({ platform }) => (
								<GameName key={platform.id} gameName={platform.name} darkMode={darkMode} />
							))}
						</div>
						<CriticScore metacritics={game.metacritic} darkMode={darkMode} />
					</div>
				</div>
			</div>
		</>
	);
};

export default GameCard;
