import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
function App() {
	const [darkMode, setDarkMode] = useState(true);
	const darkModeOff = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className="container-fluid vh-100 "
			style={{ backgroundColor: darkMode ? "#000" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, .8)", transition: "all .7s" }}>
			<div className="d-flex align-items-center justify-content-between">
				<NavBar />
				<Theme darkModeOff={darkModeOff} darkMode={darkMode} />
			</div>
			<div className="row">
				<div className="col-lg-6 bg-info">Aside</div>
				<div className="col-lg-6 bg-success d-none d-lg-block">Main</div>
			</div>
		</div>
	);
}

export default App;
