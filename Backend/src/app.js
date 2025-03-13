import express from 'express'
const app = express()
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
configDotenv()
import userRouter from "../src/routers/user.router.js"




app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))





app.use("/user", userRouter)





export default app



