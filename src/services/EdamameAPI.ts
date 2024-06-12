import {RecipeResponse} from "./EdamameAPI.types.ts";

const API_KEY = import.meta.env.VITE_RECIPES_APIKEY;
const API_ID = import.meta.env.VITE_RECIPES_ID
const BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public&beta=true";

export const getData = async (input: string) => {

	const response = await fetch(`${BASE_URL}&q=${input}&app_id=${API_ID}&app_key=${API_KEY}&imageSize=REGULAR`);

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	const data: RecipeResponse = await response.json();

	return data;
};
