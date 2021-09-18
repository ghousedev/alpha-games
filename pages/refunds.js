import Head from "next/head"

export default function Refunds() {
    return (
        <div className="flex flex-col">
            <Head>
                <title>Alpha Games Event Refund Policy</title>
                <link rel="icon" href="/alphaicon.svg" />
            </Head>
            <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 lg:w-2/3 mx-auto my-2 flex-grow px-2">
                <p className="my-2 text-gray-300 font-medium text-md">
                    A full refund will be offered in the following situations:
                </p>
                <ul className="my-2 text-gray-300 font-medium text-md list-disc px-6">
                    <li>Event cancellation</li>
                    <li>Event rescheduled</li>
                </ul>
                <p className="my-2 text-gray-300 font-medium text-md">
                    Should you purchase a ticket in error or are unable to attend for any reason outside of Alpha Games’ control the following options are available providing there is at least 48 hours before the scheduled start time of the event:
                </p>
                <ul className="my-2 text-gray-300 font-medium text-md list-disc px-6">
                    <li>Refund of ticket price minus fees incurred by Alpha Games (2.9% + 30p for UK customers and 4.9% + 30p for US customers. These are PayPal fees and entirely outside of Alpha Games’ control).</li>
                    <li>Transfer of ticket to another event of the same cost.</li>
                    <li>Transfer of ticket price to in-store credit at full face value.</li>
                </ul>
                <p className="my-2 text-gray-300 font-medium text-md">
                    With less than 48 hours before the scheduled start time of the event the following options are available ONLY if a replacement attendee is found either by the ticket holder or Alpha Games:
                </p>
                <div>
                <ul className="list-disc text-gray-300 font-medium text-md px-6">
                    <li>Refund of ticket price minus fees incurred by Alpha Games (2.9% + 30p for UK customers and 4.9% + 30p for US customers. These are PayPal fees and entirely outside of Alpha Games’ control).</li>
                    <li>Transfer of ticket to another event of the same cost.</li>
                    <li>Transfer of ticket price to in-store credit at full face value.</li>
                </ul>
                </div>
                <p className="my-2 text-gray-300 font-medium text-md">
                    If you fail to attend an event you have purchased a ticket for without informing Alpha Games, or with less than 48 hours until the scheduled event start time and a replacement attendee cannot be found, then NO REFUND of any kind will be offered.
                </p>
            </div>
        </div>
    )
}