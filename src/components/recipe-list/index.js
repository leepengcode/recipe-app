
import Link from "next/link"
import { Card, CardContent } from "../ui/card"

export default function RecipeList({recipeList}) {
    console.log(recipeList)
    return <div>
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-12">
                Recipe List
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-co">
        {
            recipeList && recipeList.length > 0 ?
            recipeList?.map(recipes => <Link href={''}>
                <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <img 
                            src={recipes.image}
                            alt={recipes.name} 
                            className="h-full w-full object-cover object-top"/>
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
