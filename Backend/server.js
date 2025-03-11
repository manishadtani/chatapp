import app from './src/app.js'
const PORT = process.env.PORT || 3001
import connect from './src/db/db.js'
connect()


app.listen(PORT,()=>{
    console.log(`server is connected on port ${PORT}`)
})