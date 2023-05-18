import mongoose from "mongoose";



export const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@localmart.ofsll0q.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');

    } catch (error) {
        console.log('error while connecting with the database', error.message);
    }
}

export default connection;