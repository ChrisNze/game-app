import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatFormSelector from "./components/PlatFormSelector";
import { PlatForm } from "./hooks/usePlatForm";
function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatForm, setSelectedPlatForm] = useState<PlatForm | null>(null);

	const darkModeOff = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className="container-fluid container-img w-100 p-2 p-sm-3 p-md-4 p-lg-5"
			style={{ backgroundColor: darkMode ? "rgba(0,0,0,.9)" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, .8)", transition: "all .7s" }}>
			<div className="d-flex align-items-center justify-content-between	">
				<NavBar />
				<Theme darkModeOff={darkModeOff} darkMode={darkMode} />
			</div>
			<div className="row mt-5">
				<div className="col-lg-1 d-none d-lg-block">
					<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
				</div>
				<div className="col-lg-11 game_container">
					<PlatFormSelector onPlatFormSelect={(platforms) => setSelectedPlatForm(platforms)} selectedPlatForm={selectedPlatForm} />
					<GameGrid darkMode={darkMode} selectedGenre={selectedGenre} selectedPlatForm={selectedPlatForm} />
				</div>
			</div>
		</div>
	);
}

export default App;
