import mongoose from "mongoose"
import { DB_NAME } from "../constants"
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Host",`${connect.connection.host}`);

    }catch(error){
        console.log("my error",error);
        process.exit(1)
    }
}
export default connectDB