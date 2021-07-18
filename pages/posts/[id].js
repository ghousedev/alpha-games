import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Head from 'next/head'
import Image from 'next/image'

const Post = ({ ...props }) => {
    const router = useRouter()
    const { id } = router.query
    const posts = [...props.posts]
    let post = []
    // Get the news post that matches the page query
    posts.forEach(function (e) {
        if (e._id != null) {
            if (e._id.toString() === id.toString()) {
                post = e
            }
        }
    })
    // Image for card
    let image = post.image[0]
    // If the scraper did not find an image then use logo svg
    if (image === undefined) {
        image = '/alphaicon.svg'
    }
    // If the post is old it may still have fb cdn url so replace with logo svg
    if (image.includes('scontent')) {
        image = '/alphaicon.svg'
    }
    // Array to hold strings
    let contentLines = []
    let linesArray = []
    let title = ""
    // Check for asteriks
    if (post.content.includes('*')) {
        // Get the text surrounded by asteriks for title
        linesArray = post.content.split("*")
        title = linesArray[1]
        // Take out the title
        linesArray.slice(2).forEach((element) => {
            contentLines.push(element)
        })
    } else {
        // No title found so just add the whole string for splitting
        contentLines = post.content
        // Generic title as none was found
        title = "News post"
    }
    // Split up the content string
    let content = contentLines.toString().split(".").map(str => <p className="my-2 text-gray-300 font-medium text-md">{str}</p>)
    // Array of p elements to display
    contentLines.map(str => <p className="my-2 text-gray-300 font-medium text-md">{str}</p>)
    
    return <div className="bg-gray-800">
        <main className="w-full px-4 pt-4 pb-4">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/alphaicon.svg" />
            </Head>
            <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 h-auto lg:w-2/3 mx-auto">
                <div className="overflow-hidden">
                    <Image alt="News image" src={image} className="object-cover w-full h-full" height={500} width={1025} />
                </div>
                <h2 className="px-4 pt-2 text-gray-300 font-semibold">{title}</h2>
                <div className="bg-gray-600 w-full p-4">
                    {content}
                </div>
            </div>
        </main>
    </div>
}


export default Post

// Get data needed to fill component from mongodb instance
export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const posts = await db
        .collection("posts")
        .find({})
        .toArray()
    return {
        props: {
            posts: posts,
        },
    };
}