console.log("Hello world");

import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

import express from 'express';
const app = express();

import databaseConnection from './db/databaseConnection.js';
import connectDB from './db/databaseConnection.js';

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Server Running on port", process.env.PORT)
});
}).catch((error) => {
    console.log("server connection failed", error);
});





