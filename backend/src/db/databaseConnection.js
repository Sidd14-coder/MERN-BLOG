import mongoose from 'mongoose'

const DB_Name = "MERN_BLOG";

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log("mongo db connected succesfully")
    } catch (error) 
    {
       console.log("MongoDb error",error);
    }
}

export default connectDB;