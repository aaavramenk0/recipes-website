import { Recipe } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import { GoArrowRight } from "react-icons/go";
import { useState } from "react"
import ReactStars from "react-stars"

// define Prop Interface
interface Props {
    recipe: Recipe
    url: string
}

// define Component
function RecipePage(props: Props) {
    // set the recipe as state for modification
    const [recipe, setRecipe] = useState<Recipe>(props.recipe)
    // return JSX
    return (
        <div className="m-10">
            <Image src={recipe?.image} alt={recipe?.name} width={300} height={300} className="w-[400px] h-78 object-cover m-auto rounded-3xl" />
            <h1 className="text-[48px] font-bold tracking-tight text-gray-900 sm:text-6xl text-center">{recipe?.name}</h1>
            <div className="text-[20px] flex flex-row justify-center items-center gap-[10px] mt-[-10px]">
                <p>Rating: {recipe?.rating}</p>
                <ReactStars edit={false} count={5} value={Math.round(recipe?.rating)} size={30} color2={'#ffd700'} />
            </div>

            <h2 className="text-[30px] text-center font-bold">Ingredients for { recipe?.servings } servings</h2>
            <p className="text-[14px] text-center font-normal italic">(Click on product to find it in Walmart)</p>
            <ol className="text-[20px] leading-10 text-center">
                {recipe?.ingredients.map((ingredient, index) => (
                    <li key={index}><Link className=" underline w-auto" target="_blank" href={`https://www.walmart.com/search/?cat_id=0&query=${ingredient}`}>{ ingredient }</Link> </li>
                ))}
            </ol> 
            <h2 className="text-[30px] font-bold text-center">Instructions</h2>
            <ol className="text-center leading-10 text-[20px]">
                {recipe?.instructions.map((direction, index) => (
                    <li key={index}>{direction}</li>
                ))}
            </ol>
            <p className=" mt-10 text-[28px] text-center font-bold italic">Preparation time: {recipe?.prep_time}</p>
            <p className=" text-[28px] text-center font-bold italic">Cooking time: {recipe?.cook_time}</p>
            <p className=" text-[28px] text-center font-bold italic">Total time: {recipe?.total_time}</p>            
        </div>
    )
}

// define server-side props
export async function getServerSideProps(context: any) {
    // fetch the recipe, the param was recieved via context.query.id
    const res = await fetch(process.env?.API_GET + "/recipes/" + context.query.id)
    const recipe = await res.json()

    // return the Server Side Props the recipe and the url from out env variables for frontend api calls
    return {
        props: { recipe, url: process.env?.API_GET + "/recipes" },
    }
}

// export the component
export default RecipePage;