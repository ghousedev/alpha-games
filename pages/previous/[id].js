import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Head from 'next/head'
import Image from 'next/image'

const PreviousEvent = ({ ...props }) => {
    const router = useRouter()
    const { id } = router.query
    const events = [...props.previousevents]
    let event = []
    events.forEach(function (e) {
        if (e._id != null) {
            if (e._id.toString() === id.toString()) {
                event = e
            }
        }
    })
    return <div className="min-h-screen bg-gray-800">
        <main className="w-full bg-gray-800 px-4 pt-4 pb-4 min-h-screen">
            <Head>
                <title>{event.name}</title>
                <meta name="description" content="The details of an event previously ran at Alpha Games."></meta>
                <link rel="icon" href="/alphaicon.svg" />
            </Head>
            <div className="shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-700 lg:w-2/3 mx-auto md:mt-28 overflow-hidden md:overflow-visible">
                    <div className="w-full block md:hidden mx-auto mb-2">
                        <Image alt="Event image" src={event.imageurl} className="object-cover w-full h-full" layout="responsive" height={650} width={900} />
                    </div>
                    <div className="w-1/3 xl:w-1/4 hidden md:block mx-auto mb-2 overflow-hidden rounded-full md: -m-28 lg: -m-36 xl: -m-40 border-2 border-yellow-300">
                        <Image alt="Event Image" src={event.imageurl} className="object-cover h-20vh" placeholder="placeholder" layout="responsive" height={650} width={650} />
                    </div>
                <div className="bg-gray-700 dark:bg-gray-800 w-full p-4 rounded-lg">
                    <p className="text-gray-200 dark:text-white text-xl font-medium mb-2">
                        {event.name}
                    </p>
                    <p className="text-gray-200 font-medium text-md">
                        {event.description}
                    </p>
                    <p className=" py-4 text-gray-200 font-medium">
                        This event has ended.
                    </p>
                    <p className="text-gray-200 font-medium text-md">Located at:</p>
                    <div className="md:w-1/2 h-96 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative">
                        <iframe className="absolute inset-0" style={{ height: "100%", width: "100%" }} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4878.067671234766!2d0.9090467569583933!3d52.315388520806046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70455b7aae8c54ae!2sAlpha%20Games!5e0!3m2!1sen!2suk!4v1626169498068!5m2!1sen!2suk" loading="lazy"></iframe>
                    </div>

                </div>
            </div>
        </main>
    </div>
}

export default PreviousEvent

// Get data needed to fill component from mongodb instance
export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const previousevents = await db
        .collection("previousevents")
        .find({})
        .toArray()
    return {
        props: {
            previousevents: previousevents,
        },
    };
}