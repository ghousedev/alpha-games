import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Head from 'next/dist/next-server/lib/head'
import Image from 'next/dist/client/image'

const Post = ({ ...props }) => {
    const router = useRouter()
    const { id } = router.query
    const posts = [...props.posts]
    let post = []
    posts.forEach(function (e) {
        if (e._id != null) {
            if (e._id.toString() === id.toString()) {
                post = e
            }
        }
    })
    let image = post.image[0]
    if (image === undefined) {
        image = '/alphaicon.svg'
    }
    if (image.includes('scontent')) {
        image = '/alphaicon.svg'
    }
    let lines = post.content.split(".").map(str => <p className="my-2 text-gray-300 dark:text-gray-300 font-medium text-md">{str}</p>)
    console.log(post.content)
    console.log(lines)
    return <div className="min-h-screen bg-gray-800">
    <main className="w-full px-4 pt-4 pb-4">
        <Head>
            <title>{post.name}</title>
            <link rel="icon" href="/alphaicon.svg" />
        </Head>
        <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 h-auto lg:w-2/3 mx-auto">
            <div className="overflow-hidden">
                <Image alt="News image" src={image} className="object-cover w-full h-full" height={500} width={1025}/>
            </div>
            <div className="bg-gray-600 dark:bg-gray-800 w-full p-4">
                {lines}
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