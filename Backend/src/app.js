import express from 'express'
const app = express()
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
configDotenv()
import userRouter from "../src/routers/user.router.js"


app.use(
    cors({
      origin: "http://localhost:5173", // Allow only your frontend
      credentials: true, // If you are using cookies or authentication tokens
    })
  );

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))





app.use("/user", userRouter)





export default app



