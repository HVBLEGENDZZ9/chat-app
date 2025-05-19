import mongoose from "mongoose";

const connecToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to the database");
    } catch(error) {
        console.log("Error in connecting to the database");
    }
}

export default connecToDB;