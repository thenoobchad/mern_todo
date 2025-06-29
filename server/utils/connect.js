import mongoose from "mongoose"

const connection = { isConnected: null };

export const connectToDB = async () => {

    try {
        if (connection.isConnected) {
            return;
        }
      
        const db = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connected ${db.connection.host}`)

        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log("Couldn't connect to database.", error.message)
    }
}