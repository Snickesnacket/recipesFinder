import {useState} from "react";
import {RecipeHit} from "../services/EdamameAPI.types.ts";
import {getData} from "../services/EdamameAPI.ts";
import SearchForm from "../components/SearchForm.tsx";
import DisplayRecipes from "../components/DisplayRecipes.tsx";


const HomePage = () => {
	const [msg, setMsg] = useState<string | null>(null)
	const [recipes, setRecipes] = useState<RecipeHit[] | null >(null)
	const [ error, setError] = useState<string | false >(false )
	const handleSearch = async (input: string) => {
		try {
			const data = await getData(input)
			console.log(data)
			if (data && data.hits && data.hits.length > 0) {
				setRecipes(data.hits)
				console.log(data.hits, 'hits')
			}

		} catch (err) {
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
		<div className="page-container">
			{error && (
				<div className="alert alert-warning" role="alert">
					{error}
				</div>
			)}

			<div className="content-container">
				<SearchForm fetchRecipes={handleSearch}/>
				{msg && (
					<h2>Recepies containing: {msg}</h2>
				)}
			</div>
				{recipes && (
					<DisplayRecipes recipes={recipes}/>
				)}

		</div>
	)
}
export default HomePage