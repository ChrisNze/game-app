import logo from "../assets/favicon.png";
const NavBar = () => {
	return (
		<>
			<div className="bg-secondary d-flex align-items-center">
				<img src={logo} alt="Logo" style={{ height: "8rem" }} />
				<h2>Navbar</h2>
			</div>
		</>
	);
};

export default NavBar;
