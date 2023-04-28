import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatFormSelector from "./components/PlatFormSelector";
import { PlatForm } from "./hooks/usePlatForm";
import SearchInput from "./components/SearchInput";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatForm, setSelectedPlatForm] = useState<PlatForm | null>(null);
	const [inputValue, setInputValue] = useState("");

	// const [testing, setTesting] = useState();

	const darkModeOff = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className="container-fluid container-img w-100 p-2 p-sm-3 p-md-4 p-lg-5"
			style={{ backgroundColor: darkMode ? "rgba(0,0,0,.9)" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, .8)", transition: "all .7s" }}>
			<div className="d-flex align-items-center">
				<NavBar />
				<SearchInput
					darkMode={darkMode}
					onSearch={(searchText) => {
						setInputValue(searchText);
					}}
				/>
				<Theme darkModeOff={darkModeOff} darkMode={darkMode} />
			</div>
			<div className="row mt-5">
				<div className="col-lg-1 d-none d-lg-block">
					<GenreList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}
						// valueChange={(value) => setGameHeading(value)}
					/>
				</div>
				<div className="col-lg-11 game_container">
					<h1 className="mb-5 display-2 fw-bold">
						{selectedPlatForm?.name} {selectedGenre?.name} Games
					</h1>
					<div className="">
						<PlatFormSelector
							onPlatFormSelect={(platforms) => setSelectedPlatForm(platforms)}
							selectedPlatForm={selectedPlatForm}
							// valueChange={(value) => setGameHeading(value)}
						/>

						{/* <Testing onTesting={(test) => setTesting(test)} />  Testing Purpose */}
					</div>

					<GameGrid
						darkMode={darkMode}
						selectedGenre={selectedGenre}
						selectedPlatForm={selectedPlatForm}
						inputValue={inputValue}
						// testing={testing}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
