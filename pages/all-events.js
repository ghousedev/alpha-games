import { connectToDatabase } from "../util/mongodb"
import EventCard from "../components/event-card";

// Parse date and time string into time since unix epoch in ms
function epoch(date) {
    return Date.parse(date)
  }

export default function AllEvents({ ...props }) {
    let events = [...props.events]
    // Sort events into soonest first
    events = events.sort((a, b) =>
        parseInt(epoch(a.end_time)) - parseInt(epoch(b.end_time))
    )
    return (
        <div className="flex flex-row flex-wrap mb-4 mr-2">
            {events.map((event) => (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 pl-2 mt-4">
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    )
}

// Get data needed to fill components from mongodb instance
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