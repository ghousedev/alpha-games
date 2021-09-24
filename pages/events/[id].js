import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Head from 'next/head'
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
    let lines = event.description.split("\n").map(str => <p className="my-2 text-gray-200 dark:text-gray-300 font-medium text-md">{str}</p>)
    // Get ticket sales numbers and work out how many are available
    const soldTickets = parseInt(event.soldtickets)
    const availableTickets = parseInt(event.availabletickets)
    const totalAvailable = availableTickets - soldTickets
    // Render page without payment buttons and with message stating no tickets remain
    if (soldTickets >= availableTickets || availableTickets === 0 || event.name.includes('magic') || event.name.includes('Magic')) {
        return <div className="bg-gray-800">
            <main className="w-full bg-gray-800 px-4 pt-4 pb-4">
                <Head>
                    <title>{event.name}</title>
                    <meta name="description" content="Details of an individual event ran at Alpha Games"></meta>
                    <link rel="icon" href="/alphaicon.svg" />
                </Head>
                <div className="shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-700 lg:w-2/3 mx-auto md:mt-32 overflow-hidden md:overflow-visible">
                    <div className="w-full block md:hidden mx-auto mb-2">
                        <Image alt="Event image" src={event.imageurl} className="object-cover w-full h-full" layout="responsive" height={650} width={900}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(650, 900))}`}/>
                    </div>
                    <div className="w-1/3 xl:w-1/4 hidden md:block mx-auto mb-2 overflow-hidden rounded-full md: -m-32 border-2 border-yellow-300">
                        <Image alt="Event Image" src={event.imageurl} className="object-cover h-20vh" placeholder="placeholder" layout="responsive" height={650} width={650}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(650, 650))}`}/>
                    </div>
                    <div className="bg-gray-700 dark:bg-gray-800 w-full p-4 rounded-lg">
                        <p className="text-gray-200 dark:text-white text-xl font-medium mb-2 underline">
                            {event.name}
                        </p>
                        {lines}
                        <p className="py-4 text-gray-200 font-medium">
                            Tickets for this event are either sold out or not available at this time.  Please contact the store if you have any questions.
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
                <div className="shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-700 lg:w-2/3 mx-auto md:mt-32 overflow-hidden md:overflow-visible">
                    <div className="w-full block md:hidden mx-auto mb-2">
                        <Image alt="Event image" src={event.imageurl} className="object-cover w-full h-full" layout="responsive" height={650} width={900}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(650, 900))}`}/>
                    </div>
                    <div className="w-1/3 xl:w-1/4 hidden md:block mx-auto mb-2 overflow-hidden rounded-full md: -m-32 border-2 border-yellow-300">
                        <Image alt="Event Image" src={event.imageurl} className="object-cover h-20vh" placeholder="placeholder" layout="responsive" height={650} width={650}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(650, 650))}`}/>
                    </div>
                    <div className="bg-gray-700 dark:bg-gray-800 w-full p-4 rounded-lg">
                        <p className="text-gray-200 text-xl font-medium mb-2 underline">
                            {event.name}
                        </p>
                        {lines}
                        <p className="my-6 text-gray-200 font-light font-semibold text-md">
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