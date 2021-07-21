import Link from 'next/link'
import Image from 'next/image'

// Card to display event info
export default function PreviousCard({ event }) {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer ml-2 mr-2 border-2 border-yellow-300" style={{ minWidth: 300, minHeight: 300 }}>
            <Link href={"/previous/" + event.id}>
                <div className="w-full block h-full">
                    <div className="h-60 overflow-hidden">
                        <Image alt="Event image" src={event.imageurl} className="object-cover w-full h-full" height={650} width={700} placeholder="empty" />
                    </div>
                    <div className="bg-gray-600 dark:bg-gray-800 w-full p-4">
                        <p className="truncate text-gray-200 text-xl font-medium mb-2">
                            {event.name}
                        </p>
                        <p className="truncate text-gray-300 font-medium text-md">
                            {event.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}