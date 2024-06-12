import {useState} from 'react'
import './App.css'
import SearchForm from "./components/SearchForm.tsx";
import DisplayRecipes from "./components/DisplayRecipes.tsx";
import {getData} from "./services/EdamameAPI.ts";
import {RecipeHit} from "./services/EdamameAPI.types.ts";
import {Container} from "react-bootstrap";

const App = () => {
	const [msg, setMsg] = useState<string | null>(null)
	const [recipes, setRecipes] = useState<RecipeHit[] | null >(null)
	const [ error, setError] = useState<string | false >(false )

	const handleSearch = async (input: string)=> {
		try{
		const data = await getData(input)
		console.log(data)
			if(data && data.hits && data.hits.length > 0) {
				setRecipes(data.hits)
				console.log(data.hits, 'hits')
			}

		}catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Something unexpected happened.");
			}
		}
		setMsg(input)
	}

	console.log("Rendering...")

	return (
		<Container>
			{error && (
				<div className="alert alert-warning" role="alert">
					{error}
				</div>
			)}

			<div className="App">
				<h1>Recipe finder</h1>
				<SearchForm fetchRecipes={handleSearch}/>
				{msg && (
					<h2>Recepies containing: {msg}</h2>
				)}
				{recipes && (
					<DisplayRecipes recipes={recipes}/>
				)}
			</div>
		</Container>
	)
}

export default App
