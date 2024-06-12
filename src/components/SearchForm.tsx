import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

interface IProps {
	fetchRecipes: (input: string) => void
}
const SearchForm: React.FC<IProps> = ({fetchRecipes}) => {
	const [ searchInput, setSearchInput] = useState<string>('')
	const handleSearchSubmit = ((e: React.FormEvent) => {

		e.preventDefault()
		if(searchInput) {
			fetchRecipes(searchInput)
			setSearchInput('')
		}
		setSearchInput('')
	})

	return (
		<Container>
			<Form onSubmit={handleSearchSubmit}>
				<Row className="mb-3">
					<Col xs={12} md={"auto"} className="d-flex flex-column flex-md-row">
						<Form.Group as={Col} xs={12} md={9} className="mb-2 mb-md-0">
							<Form.Control
								type="text"
								placeholder="Find recipes with..."
								onChange={e => setSearchInput(e.target.value.trim())}
								value={searchInput}
								required
								id="inputField"
							/>
						</Form.Group>
						<Col xs={12} md={"auto"}>
							<Button type="submit" className="button" style={{ width: '100%' }}>
								Find recipe
							</Button>
						</Col>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}
export default SearchForm
