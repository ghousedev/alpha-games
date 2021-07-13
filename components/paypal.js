import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const PP_CLIENT_ID = process.env.PP_CLIENT_ID
const initialOptions = {
    "client-id": "test",
    "currency": "GBP",
}

export default function PayPal(price) {
  return (
    <PayPalScriptProvider options={initialOptions}>
    {console.log(PP_CLIENT_ID)}
    <PayPalButtons 
        createOrder={(data, actions) => {
           return actions.order.create({
               purchase_units: [
                   {
                       amount: {
                           value: price.price.toString(),
                       },
                   },
               ],
           });
       }}
       onApprove={(data, actions) => {
           return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name)
           })
       }}
    />
    </PayPalScriptProvider>
  )
}
