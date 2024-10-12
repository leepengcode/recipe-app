
import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipe() {
    try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();

        return data?.recipes;

    } catch (error) {
        throw new Error(error)
    }    
}

export default async function Recipes() {

    const recipeList = await fetchListOfRecipe();
   

    return <RecipeList recipeList={recipeList}/>;
    
    
};
