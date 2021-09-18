import Head from "next/head"

export default function PaymentConfirmed() {
    return (
        <div className="flex flex-col">
            <Head>
                <title>Payment confirmed</title>
                <link rel="icon" href="/alphaicon.svg" />
            </Head>
            <div className="overflow-hidden shadow-lg rounded-lg border-2 border-yellow-300 bg-gray-600 lg:w-2/3 mx-auto my-2 flex-grow">
                <p className="mx-2 my-2 text-gray-300 font-medium text-md text-center">Your payment has been processed, thank you for your purchase.</p>
            </div>
        </div>
    )
}