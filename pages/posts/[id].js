import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Head from 'next/dist/next-server/lib/head'

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
    return <main className="w-full bg-gray-800 px-16 pt-4 pb-4 min-h-screen">
        <Head>
            <title>{post.name}</title>
            <link rel="icon" href="/alphaicon.svg" />
        </Head>
        <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer border-2 border-yellow-300 bg-gray-600 h-auto lg:w-2/3 mx-auto">
            <div className="overflow-hidden">
                <img alt="Event image" src={post.image[0]} className="object-cover w-full" />
            </div>
            <div className="bg-gray-600 dark:bg-gray-800 w-full p-4">
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {post.content}
                </p>
            </div>
        </div>
    </main>
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