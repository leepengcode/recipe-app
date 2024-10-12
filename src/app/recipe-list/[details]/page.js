import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function fetchRecipeDetail(currentRecipeId) {
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const result = await res.json();

        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function RecipeDetail({ params }) {

    const recipeDetail = await fetchRecipeDetail(params.details);

    return (
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <div className="flex justify-between">
                <Link href={'/recipe-list'}><Button >Back</Button></Link>
                <h1 className="text-4xl font-bold text-gray-800 mb-12">
                    Recipe Detail
                </h1>

            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-12">
                {recipeDetail?.name}
            </h1>
            <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md">
                    {/* Recipe Image */}
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-50">
                        <img
                            src={recipeDetail?.image}
                            alt={recipeDetail?.name}
                            className="h-full w-full object-cover object-top"
                        />
                    </div>

                    {/* Recipe Details */}
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">{recipeDetail?.name}</h2>
                        <div className="flex justify-between my-3">
                            <span className="text-gray-600">Rating: {recipeDetail?.rating}</span>
                            <span className="text-gray-600">Cuisine: {recipeDetail?.cuisine}</span>
                        </div>

                        {/* Ingredients */}
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Ingredients</h3>
                            <ul className="list-disc list-inside">
                                {recipeDetail?.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Instructions */}
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Instructions</h3>
                            <ol className="list-decimal list-inside">
                                {recipeDetail?.instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Additional Information */}
                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="font-bold">Prep Time</h3>
                                <p>{recipeDetail?.prepTimeMinutes} minutes</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Cook Time</h3>
                                <p>{recipeDetail?.cookTimeMinutes} minutes</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Servings</h3>
                                <p>{recipeDetail?.servings} servings</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="font-bold">Difficulty</h3>
                                <p>{recipeDetail?.difficulty}</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Calories</h3>
                                <p>{recipeDetail?.caloriesPerServing} kcal/serving</p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-4">
                            <h3 className="font-bold">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {recipeDetail?.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>


        </div>
    );
}
