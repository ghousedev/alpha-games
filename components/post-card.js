export default function PostCard({ post }) {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer ml-2 mr-2 border-2 border-yellow-300" style={{minWidth: 300}}>
            <a href="#" className="w-full block h-full">
            <div className="h-80 overflow-hidden">
                <img alt="News post image" src={post.image[0]} className="object-cover w-full h-full"/>
                </div>
                <div className="bg-gray-600 dark:bg-gray-800 w-full p-4">
                    {/* <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        NEWS POST
                    </p> */}
                    <p className="truncate text-gray-400 dark:text-gray-300 font-light text-md">
                        {post.content}
                    </p>
                    <div className="flex items-center mt-4">
                        {/* <a href="#" className="block relative">
                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a> */}
                        <div className="flex flex-col justify-between ml-2 text-sm">
                            <p className="text-gray-800 dark:text-white">
                                by {post.name}
                            </p>
                            <p className="text-gray-400 dark:text-gray-300">
                                {post.posted_on}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}