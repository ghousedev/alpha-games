import Link from 'next/link'
import Image from 'next/image'

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

// Card to display event info
export default function PreviousCard({ event }) {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer ml-2 mr-2 border-2 border-yellow-300" style={{ minWidth: 300, minHeight: 300 }}>
            <Link href={"/previous/" + event.id}>
                <div className="w-full block h-full">
                    <div className="h-60 overflow-hidden">
                        <Image alt="Event image" key={event.imageurl} src={event.imageurl} className="object-cover w-full h-full" height={650} width={700} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(650, 700))}`}/>
                    </div>
                    <div className="bg-gray-700 dark:bg-gray-800 w-full p-4">
                        <p className="truncate text-gray-200 text-xl font-medium mb-2">
                            {event.name}
                        </p>
                        <p className="truncate text-gray-200 font-medium text-md">
                            {event.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}