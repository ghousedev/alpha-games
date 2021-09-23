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
    posts.forEach((e) => {
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
    // Split up the content string and add each element to a new array of <p> elements
    let content = contentLines.toString().split(". ").map(str => <p className="my-2 text-gray-300 font-medium text-md">{str}.</p>)
    // Remove the last element if it is an empty string.
    if (content[content.length - 1] === "") {
        content.pop()
    }

    return <div className="bg-gray-800">
        <main className="w-full px-4 pt-4 pb-4">
            <Head>
                <title>{title}</title>
                <meta name="description" content="News posts made by Alpha Games, taken from the Facebook page."></meta>
                <link rel="icon" href="/alphaicon.svg" />
            </Head>
            <div className="shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-700 lg:w-2/3 mx-auto md:mt-40 overflow-hidden md:overflow-visible">
                <div className="w-full block md:hidden mx-auto mb-2">
                    <Image alt="News image" src={image} className="object-cover h-20vh" placeholder="placeholder" layout="responsive" height={650} width={1200} />
                </div>
                <div className="w-1/3 xl:w-1/4 hidden md:block mx-auto mb-2 overflow-hidden rounded-full md: -m-20 lg: -m-28 xl: -m-34 border-2 border-yellow-300">
                    <Image alt="News image" src={image} className="object-cover h-20vh" placeholder="placeholder" layout="responsive" height={650} width={650} />
                </div>
                <div className="w-full ml-auto">
                    <h1 className="px-4 pt-2 text-gray-200 font-semibold underline">{title}</h1>
                </div>
                <div className="bg-gray-700 text-gray-200 w-full p-4 rounded-lg">
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