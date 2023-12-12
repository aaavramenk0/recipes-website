import { Author } from "@/utils/types"
import { useState } from "react"


// define Prop Interface
interface Props {
    author: Author
    url: string
}

// define component
function AuthorPage(props : Props) {
    // set the author as state for modification
    const [author, setAuthor] = useState<Author>(props.author)
    
    // return JSX
    return (
        <>
            <h1> Author {author?.name }</h1>
            { author?._id}
        </>
    )
}

// define server-side props
export async function getServerSideProps(context: any) {
    // fetch the author, the param was recieved via context.query.id
    const res = await fetch(process.env?.API_GET + "/authors/" + context.query.id)
    const author = await res.json()

    // return the Server Side Props the author and the url from out env variables for frontend api calls
    return {
        props: { author, url: process.env?.API_GET + "/authors" },
    }
}

export default AuthorPage;