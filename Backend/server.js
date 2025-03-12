import app from './src/app.js'
const PORT = process.env.PORT || 3001
import cors from 'cors'
import connect from './src/db/db.js'
connect()




app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"]
  }))

app.listen(PORT,()=>{
    console.log(`server is connected on port ${PORT}`)
})