import mongoose  from "mongoose";

const connectDB = async()=>{
    try {
        const connect  = await mongoose.connect(process.env.MONGO_URL)
        if(connect)
        {
            console.log("Connected successfully !")
        }
    } catch (error) {
         console.log("Error occured while  trying to  connect to  db.")
    }
}
export  default connectDB