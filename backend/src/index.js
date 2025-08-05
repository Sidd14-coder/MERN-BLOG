console.log("Hello world");

import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

import databaseConnection from './db/databaseConnection.js';
import connectDB from './db/databaseConnection.js';
connectDB();