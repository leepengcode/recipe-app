
import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

export default function RecipeList({ recipeList }) {
    // console.log(recipeList)
    return <div>
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <div className="flex justify-between">
                <Link href={'/'}><Button >Back</Button></Link>
                <h1 className="text-4xl font-bold text-gray-800 mb-12">
                    Recipe List
                </h1>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-co">
                {
                    recipeList && recipeList.length > 0 ?
                        recipeList?.map((recipes, index) => <Link href={`/recipe-list/${recipes.id}`}>
                            <Card>
                                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                    <div key={index} className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                        <img
                                            src={recipes.image}
                                            alt={recipes.name}
                                            className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div>
                                        <h3 className=" pt-3 text-2xl font-bold">
                                            {recipes.name}
                                        </h3>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className=" pt-3 text-1xl text-gray-500">
                                            Rating : {recipes.rating}
                                        </h3>
                                        <h3 className=" pt-3 text-1xl  font-bold">
                                            {recipes.cuisine}
                                        </h3>
                                    </div>

                                </CardContent>

                            </Card>
                        </Link>)
                        : null
                }
            </div>
        </div>

    </div>

};
