import React from "react";
import NavBar from "./components/NavBar";
function App() {
	return (
		<div className="container-fluid">
			<div className="row">
				<NavBar />
			</div>
			<div className="row">
				<div className="col-lg-6 bg-info">Aside</div>
				<div className="col-lg-6 bg-success d-none d-lg-block">Main</div>
			</div>
		</div>
	);
}

export default App;
