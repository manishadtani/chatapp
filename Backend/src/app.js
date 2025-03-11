import express from 'express'
const app = express()
import { configDotenv } from 'dotenv'
import cors from 'cors'
configDotenv()
import userRouter from "../src/routers/user.router.js"

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors())

app.use("/user", userRouter)





export default app



