import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import Router from "next/router"

const clientId = process.env.NEXT_PUBLIC_PP_CLIENT_ID

export default function PayPal(...props) {
    const initialOptions = {
    "client-id": clientId,
    "currency": "GBP",
}
    const info = props[0]

    const ticketPurchased = async (eventId) => {
        // console.log(eventId)
        await fetch(`/api/${eventId}/ticket`)
        // const res = await data.json()
        // Router.reload(window.location.pathname)
        // console.log(res)
    }

    return (
        <PayPalScriptProvider options={initialOptions}>
            {/*console.log(info.price)*/}
            {/* {console.log(id)}
        {console.log(sold)}
        {console.log(available)} */}
        <button onClick={()=>ticketPurchased(info.id)} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Test api</button>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: info.price.toString(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                        ticketPurchased(info.id)
                        Router.reload(window.location.pathname)
                        // alert('Transaction completed by ' + details.payer.name.given_name)
                    })
                }}
            />
        </PayPalScriptProvider>
    )
}