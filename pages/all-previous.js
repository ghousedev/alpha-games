import { connectToDatabase } from "../util/mongodb"
import PreviousCard from "../components/previous-card"

export default function AllEvents({...props}) {
    let events = [...props.events]
    return (
        <div className="flex flex-row flex-wrap mb-4 mr-2">
            {events.map((event) => (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 pl-2 mt-4">
                <PreviousCard event={event}/>
                </div>
            ) )}
        </div>
    )
}

// Get data needed to fill components from mongodb instance
export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const events = await db
    .collection("previousevents")
    .find({})
    .toArray()
    return {
        props: {
          events: events,
        },
      };
    }