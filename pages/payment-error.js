import Head from "next/head"

export default function PaymentError() {
    return (
        <div className="flex flex-col">
            <Head>
                <title>There was an error</title>
                <link rel="icon" href="/alphaicon.svg" />
            </Head>
            <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 lg:w-2/3 mx-auto flex-grow">
                <p className="mx-2 my-2 text-gray-300 font-medium text-md">There was an error processing your payment, please try again or contact us.</p>
            </div>
        </div>
    )
}