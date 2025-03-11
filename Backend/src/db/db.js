import mongoose from 'mongoose'


const connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("database is connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}


export default connect