import Dropdown from "react-bootstrap/Dropdown";
import usePlatForm, { PlatForm } from "../hooks/usePlatForm";

interface Props {
	onPlatFormSelect: (platforms: PlatForm) => void;
	selectedPlatForm: PlatForm | null;
}

function PlatFormSelector({ onPlatFormSelect, selectedPlatForm }: Props) {
	const { platForm, error, loading } = usePlatForm();

	if (error) return null;
	return (
		<>
			<Dropdown className="mb-4">
				<Dropdown.Toggle id="" className="fs-2 px-4 py-3 dropdown">
					{selectedPlatForm?.name || "PlatForms"}
				</Dropdown.Toggle>

				<Dropdown.Menu className="dropdown-menu" style={{ minWidth: "250px" }}>
					{platForm.map((platforms) => (
						<Dropdown.Item
							key={platforms.id}
							href="#/action-1"
							className="dropdown-link fs-2 py-3 ps-4"
							onClick={() => onPlatFormSelect(platforms)}>
							{platforms.name}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}

export default PlatFormSelector;
