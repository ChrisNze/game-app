import { Button, ButtonGroup } from "@chakra-ui/react";
function App() {
	return (
		<div className="container-fluid bg-primary">
			<div className="row">
				<div className="col bg-secondary">Nav</div>
			</div>
			<div className="row">
				<div className="col-lg-6 bg-info">Aside</div>
				<div className="col-lg-6 bg-success d-none d-lg-block">Main</div>
			</div>
		</div>
	);
}

export default App;
