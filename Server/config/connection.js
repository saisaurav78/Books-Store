import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async () => {
    
    try {
        await mongoose.connect(process.env.URI)
        console.log('connected to db')
    } catch (error) {
        console.error(error)
    }

}
export default connectDB