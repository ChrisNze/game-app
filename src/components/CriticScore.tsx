interface MetaCritics {
	metacritics: number;
	darkMode: boolean;
}

const CriticScore = ({ metacritics, darkMode }: MetaCritics) => {
	const backgroung_Color =
		metacritics >= 90
			? "rgba(111, 176, 111, 0.55)"
			: metacritics >= 75
			? "rgba(111, 176, 111, 0.2)"
			: metacritics >= 50
			? "rgba(111, 176, 111, 0.1)"
			: "";
	return (
		<div
			className="fs-3 px-3 rounded-3 meta_score"
			style={{
				backgroundColor: backgroung_Color,
				color: darkMode ? "rgba(111, 176, 111, 0.9)" : "rgba(0, 0, 0, .8)",
			}}>
			{metacritics}
		</div>
	);
};

export default CriticScore;
