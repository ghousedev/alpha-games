import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb"

export default function PostCard({ posts }) {
    return (
        <div className="items-center justify-center min-h-screen">
            <section className="text-gray-600 body-font">
                <div className="flex flex-row overflow-x-auto">
                    <Head>
                        <title>Alpha Games</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {posts.map((post) => (
                        <div className="flex p-4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="object-cover object-center" style={{ maxHeight: 500 }} src={post.image[0]} alt="Post image" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">NEWS POST</h2>
                                    <p className="leading-relaxed mb-3 overflow-hidden" style={{ maxHeight: 250 }}>{post.content}</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const posts = await db
        .collection("posts")
        .find({})
        .toArray();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
        },
    };
}