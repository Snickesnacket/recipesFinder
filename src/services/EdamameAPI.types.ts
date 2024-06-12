interface RecipeImage {
	url: string;
	width: number;
	height: number;
}


interface RecipeIngredient {
	text: string;
	weight: number;
}

interface Recipe {
	cuisineType: string[];
	dishType: string[];
	healthLabels: string[];
	image: string;
	images: {
		THUMBNAIL: RecipeImage;
		SMALL: RecipeImage;
		REGULAR: RecipeImage;
	};
	ingredientLines: string[];
	ingredients: RecipeIngredient[];
	label: string;
	mealType: string[];
}

export interface RecipeHit {
	recipe: Recipe;
}


export interface RecipeResponse {
	count: number;
	from: number;
	to: number;
	hits: RecipeHit[];
}
