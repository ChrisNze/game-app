import logo from "../assets/favicon.png";

const NavBar = () => {
	return (
		<>
			<div className="d-flex align-items-center">
				<img src={logo} alt="Logo" style={{ height: "6rem" }} className="me-3" />
				<h2>Navbar</h2>
			</div>
		</>
	);
};

export default NavBar;
