import Link from "next/link"
import Image from "next/image"

// Card for displaying news post
export default function PostCard({ post }) {
    let image = post.image[0]
    // If the scraper did not find the image or image still fb cdn then make it the logo svg
    if (image === undefined || image.toString().includes('scontent')) {
        image = '/alphaicon.svg'
    }
    return (
        <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer ml-2 mr-2 border-2 border-yellow-300" style={{ minWidth: 300 }}>
            <Link href={"/posts/" + post._id}>
                <div className="w-full block h-full">
                    <div className="h-60 overflow-hidden">
                        <Image alt="News image" src={image} className="object-cover w-full h-full" placeholder="empty" height={650} width={700} />
                    </div>
                    <div className="bg-gray-600 w-full p-4">
                        <p className="truncate text-gray-200 font-medium text-md">
                            {post.content}
                        </p>
                        <div className="flex items-center mt-4">
                            <div className="flex flex-col justify-between ml-2 text-sm">
                                <p className="text-gray-800">
                                    by {post.name}
                                </p>
                                <p className="text-gray-400">
                                    {post.posted_on.substring(0, 10)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}