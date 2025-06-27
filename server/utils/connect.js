import mongoose from "mongoose"

const connection = { isConnected: null };

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connection[0].readyState;
    } catch (error) {
        console.log("Could not connect to databse.")
    }
}