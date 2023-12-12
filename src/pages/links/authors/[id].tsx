import { Author } from "@/utils/types"
import { Avatar, AvatarIcon } from "@nextui-org/react"
import Link from "next/link"
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
            <Avatar icon={<AvatarIcon />} size="lg" className="m-auto mt-4" />
            <h1 className="text-[48px] font-bold tracking-tight text-gray-900 sm:text-6xl text-center">{ author?.name }</h1>
            <Link href={`mailto:${author?.email}`} className="text-[30px] text-center underline m-auto">{ author?.email }</Link>
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