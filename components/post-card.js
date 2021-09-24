import Link from "next/link"
import Image from "next/image"

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
                        <Image alt="News image" src={image} className="object-cover w-full h-full" placeholder="empty" height={650} width={700} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(650, 700))}`}/>
                    </div>
                    <div className="bg-gray-700 w-full p-4">
                        <p className="truncate text-gray-200 font-medium text-md">
                            {post.content}
                        </p>
                        <div className="flex items-center mt-4">
                            <div className="flex flex-col justify-between text-sm">
                                <p className="text-gray-200">
                                    by {post.name}
                                </p>
                                <p className="text-gray-200">
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