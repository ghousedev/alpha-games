export default async function handler(req, res) {
    let nodemailer = require('nodemailer')
    if (req.method === 'POST') {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.ionos.co.uk',
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
            secure: true,
        })
        const mailOptions = {
            from: 'Ticket Sales @ Alpha Games <tickets@alphagames.co.uk>',
            to: 'chris@alphagames.co.uk',
            subject: 'You have received payment for an event ticket',
            text: 'Event ID:' + req.body.eventId + ' ' + 'Price:' + req.body.price + ' ' + 'Purchased by:' + req.body.buyerName + ' ' + 'Contact:' + req.body.buyerEmail,
            html: `<div><p>Event ID: ${req.body.eventId}</p>` +
               `<p>Price: ${req.body.price}</p>` +
                `<p>Purchased by: ${req.body.buyerName}</p>` +
                `<p>Contact: ${req.body.buyerEmail}</p></div>`,
        }
        // console.log(JSON.stringify(mailData))
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
            }
        })
        res.status(200)
        res.send()
    }
}