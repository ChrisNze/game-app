interface Props {
	darkModeOff: () => void;
	darkMode: boolean;
}
const Theme = ({ darkModeOff, darkMode }: Props) => {
	return (
		<div className="form-check form-switch d-flex">
			<input className="form-check-input fs-4 me-2" type="checkbox" id="switch" onClick={darkModeOff} />
			<label className="form-check-label fs-5" htmlFor="switch">
				{darkMode ? "Dark Mode" : "Light Mode"}
			</label>
		</div>
	);
};

export default Theme;
