import express  from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./routes/user.route.js"
import cors from "cors"
dotenv.config()
const app  = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3001


app.use("/api/Contacts",userRouter)



app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
    connectDB()
})
