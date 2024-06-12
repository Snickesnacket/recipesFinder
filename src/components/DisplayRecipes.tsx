import {RecipeHit} from "../services/EdamameAPI.types.ts";
import Card from 'react-bootstrap/Card';
import {Col, Container, Row} from "react-bootstrap";

interface IProps {
	recipes: RecipeHit[]
}

const DisplayRecipes: React.FC<IProps> = ({recipes}) => {
	console.log(recipes[0].recipe, 'DisplayRecipes')
	return (
		<Container>
			<Row>
				{recipes && recipes.length > 0 && recipes.map((rec, index) => (
					<Col key={index} xs={12} md={6} lg={4} className="d-flex">
						<Card className="py-3 m-2 flex-grow-1" style={{ width: '100%' }}>
							<h2 className="mb-3 ">
								{rec.recipe.label}
							</h2>
							<Card.Img variant="top" src={rec.recipe.images.SMALL.url} />
							<Card.Body>
								<Card.Text>
									{rec.recipe.cuisineType.map((ct, i) => (
										<span key={i}>{ct}</span>
									))}
								</Card.Text>

								<Card.Text>
									{rec.recipe.dishType.map((dt, i) => (
										<span key={i}>{dt}</span>
									))}
									<h4 style={{ margin: 5 }}>
										Ingredients
									</h4>
								</Card.Text>
								<ul>
									{rec.recipe.ingredients.map((ing, i) => (
										<li key={i}>{ing.text}</li>
									))}
								</ul>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default DisplayRecipes;
