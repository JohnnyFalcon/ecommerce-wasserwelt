import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!, {
            tls: true,
            ssl: true,
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log("The DB error is", err);
    }
}
