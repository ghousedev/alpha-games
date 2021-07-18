import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Head from 'next/dist/next-server/lib/head'
import PayPal from '../../components/paypal'
import Image from 'next/image'

// Dynamic route page to display individual event info
const Event = ({ ...props }) => {
    const router = useRouter()
    const { id } = router.query
    const events = [...props.events]
    let event = []
    // Get the event that matches the page query
    events.forEach(function (e) {
        if (e._id != null) {
            if (e._id.toString() === id.toString()) {
                event = e
            }
        }
    })
    // Split up the content string.
    let lines = event.description.split("\n").map(str => <p className="my-2 text-gray-300 dark:text-gray-300 font-medium text-md">{str}</p>)
    // Get ticket sales numbers and work out how many are available
    const soldTickets = parseInt(event.soldtickets)
    const availableTickets = parseInt(event.availabletickets)
    const totalAvailable = availableTickets - soldTickets
    // Render page without payment buttons and with message stating no tickets remain
    if (soldTickets >= availableTickets || availableTickets === 0) {
        return <div className="bg-gray-800">
            <main className="w-full bg-gray-800 px-4 pt-4 pb-4">
                <Head>
                    <title>{event.name}</title>
                    <link rel="icon" href="/alphaicon.svg" />
                </Head>
                <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 h-auto lg:w-2/3 mx-auto">
                    <div className="overflow-hidden">
                        <Image alt="Event image" src={event.imageurl} className="object-cover w-full h-full" height={550} width={1000} />
                    </div>
                    <div className="bg-gray-600 dark:bg-gray-800 w-full p-4">
                        <p className="text-gray-200 dark:text-white text-xl font-medium mb-2">
                            {event.name}
                        </p>
                        {lines}
                        <p className="py-4 text-gray-400 font-medium">
                            Tickets for this event are either sold out or not available at this time.
                        </p>
                        <div className="md:w-1/2 h-96 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative">
                            <iframe className="absolute inset-0" style={{ height: "100%", width: "100%" }} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4878.067671234766!2d0.9090467569583933!3d52.315388520806046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70455b7aae8c54ae!2sAlpha%20Games!5e0!3m2!1sen!2suk!4v1626169498068!5m2!1sen!2suk" loading="lazy"></iframe>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    } else {
        // Render page with payment buttons
        return <div className="bg-gray-800">
            <main className="w-full bg-gray-800 px-4 pt-4 pb-4">
                <Head>
                    <title>{event.name}</title>
                    <link rel="icon" href="/alphaicon.svg" />
                </Head>
                <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 h-auto lg:w-2/3 mx-auto">
                    <div className="overflow-hidden">
                        <img alt="Event image" src={event.imageurl} className="object-cover w-full" />
                    </div>
                    <div className="bg-gray-600 dark:bg-gray-800 w-full p-4">
                        <p className="text-gray-200 text-xl font-medium mb-2">
                            {event.name}
                        </p>
                        {lines}
                        <p className="my-6 text-gray-400 font-light font-semibold text-md">
                            There are currently {totalAvailable.toString()} tickets available to purchase, use paypal below to buy your ticket now.
                        </p>
                        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div className="w-full sm:w-1/2 h-96 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative">
                                <iframe className="absolute inset-0" style={{ height: "100%", width: "100%" }} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4878.067671234766!2d0.9090467569583933!3d52.315388520806046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70455b7aae8c54ae!2sAlpha%20Games!5e0!3m2!1sen!2suk!4v1626169498068!5m2!1sen!2suk" loading="lazy"></iframe>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-4">
                                <PayPal price={event.price}
                                    id={id}
                                    available={availableTickets}
                                    sold={soldTickets}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    }

}

export default Event

// Get data needed to fill component from mongodb instance
export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const events = await db
        .collection("events")
        .find({})
        .toArray()
    return {
        props: {
            events: events,
        },
    };
}