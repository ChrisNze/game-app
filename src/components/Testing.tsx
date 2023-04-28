import Dropdown from "react-bootstrap/Dropdown";
interface Props {
	onTesting: (num: number) => void;
}

function Testing({ onTesting }: Props) {
	return (
		<>
			<Dropdown className="mb-4">
				<Dropdown.Toggle id="" className="fs-2 px-4 py-3 dropdown">
					Testing
				</Dropdown.Toggle>

				<Dropdown.Menu className="dropdown-menu" style={{ minWidth: "250px" }}>
					<h1 onClick={() => onTesting(20)}>20 Pages</h1>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}

export default Testing;
