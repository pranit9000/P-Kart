import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js' 
import { errorMiddleware } from './error/error.js'
import  router  from './routes/authRoute.js'
import paymentRoute from "./routes/paymentRoute.js";

const app =express()
dotenv.config({path:"./config/config.env"})

console.log(process.env.FRONTEND_URL)
app.use(cors(
    {
        origin:process.env.FRONTEND_URL,
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use("/api/v1",router)
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API })
);
connectDB()

app.use(errorMiddleware)
export default app