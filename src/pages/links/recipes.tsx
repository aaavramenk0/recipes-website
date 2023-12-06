
import { Recipe } from "@/utils/types";
import Link from "next/link";

// define the components props
interface IndexProps {
    recipes: Array<Recipe>;
}

// define the page component
function Recipes({ recipes }: IndexProps) {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes?.map((recipe) => (
        <div key={recipe._id}>
        <Link href={`/recipes/${recipe._id}`}>
          <p> { recipe._id }</p>
        </Link>
    </div>
    ))}

    </div>
)
}

// Get props for server side rendering
export async function getServerSideProps() {
    // get recipes data from the API
    const res = await fetch(process.env.RECIPE_GET as string)
    const recipes = await res.json();

    // return props
    return {
      props: { recipes },
    }
}

export default Recipes;