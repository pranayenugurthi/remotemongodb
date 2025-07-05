import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(`mongodb+srv://pranayenugurthi:pranaykumar2629@cluster0.ishvpui.mongodb.net/${DB_NAME}`)
        console.log("Host",`${connect.connection.host}`);

    }catch(error){
        console.log("my error",error);
        process.exit(1)
    }
}
export default connectDB