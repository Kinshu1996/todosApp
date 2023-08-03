import mongoose from "mongoose";

const Connection = () => {

    const MONGODB_URI = process.env.URI;
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connected with the database', error.message);
    })
}


export default Connection;


