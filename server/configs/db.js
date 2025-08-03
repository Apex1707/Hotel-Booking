// import mongoose from "mongoose";

// const connectDB=async () =>{
//     try{
//         mongoose.connection.on('connected',()=> console.log("Database Connected"));
//         await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
//     }catch (error){
//         console.log(error.message);
//     }
// }
// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('error', err => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;