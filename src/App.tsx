import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import GameGrid from "./components/GameGrid";
function App() {
	const [darkMode, setDarkMode] = useState(true);

	const darkModeOff = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className="container-fluid container-img w-100 p-5"
			style={{ backgroundColor: darkMode ? "rgba(0,0,0,.9)" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, .8)", transition: "all .7s" }}>
			<div className="d-flex align-items-center justify-content-between	">
				<NavBar />
				<Theme darkModeOff={darkModeOff} darkMode={darkMode} />
			</div>
			<div className="row mt-5">
				<div className="col-lg-2">Aside</div>
				<div className="col-lg-10">
					<GameGrid darkMode={darkMode} />
				</div>
			</div>
		</div>
	);
}

export default App;
