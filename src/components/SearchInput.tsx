import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";

interface Props {
	darkMode: boolean;
}

function SearchInput({ darkMode }: Props) {
	return (
		<Form className="flex-grow-1">
			<Form.Group className="ms-4 me-5 d-flex align-items-center">
				<BsSearch className="search-icon fs-3" />
				<Form.Control type="search" placeholder="Search games..." className="rounded-pill search" />
			</Form.Group>
		</Form>
	);
}

export default SearchInput;
