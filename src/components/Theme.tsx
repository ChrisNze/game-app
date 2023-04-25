interface Props {
	darkModeOff: () => void;
	darkMode: boolean;
}
const Theme = ({ darkModeOff, darkMode }: Props) => {
	return (
		<div className="form-check form-switch d-flex align-items-center fs-3">
			<input className="form-check-input me-2" type="checkbox" id="switch" onClick={darkModeOff} style={{ cursor: "pointer" }} />
			<label className="form-check-label" htmlFor="switch" style={{ cursor: "pointer" }}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</label>
		</div>
	);
};

export default Theme;
