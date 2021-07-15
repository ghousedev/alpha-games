import { connectToDatabase } from '../../../util/mongodb'

export default async function handler(req, res) {
    const { db } = await connectToDatabase()

    const eventId = req.query

    const response = await db.collection("events").findOneAndUpdate(
        { _id: eventId.id },
        {
            $inc: { soldtickets: 1 }
        }, { returnOriginal: false, upsert: true }
    )

    res.json(response)
}