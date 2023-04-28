import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";

interface Props {
	darkMode: boolean;
	onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<Form
			className="flex-grow-1"
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
			}}>
			<Form.Group className="ms-4 me-5 d-flex align-items-center">
				<BsSearch className="search-icon fs-3" />
				<Form.Control ref={ref} type="search" placeholder="Search games..." className="rounded-pill search" />
			</Form.Group>
		</Form>
	);
}

export default SearchInput;
