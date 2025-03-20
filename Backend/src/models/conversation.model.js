import mongoose from "mongoose"
import user from '../models/user.model.js'
import message from "./message.model.js"

const conversationSchema = new mongoose.Schema({
            members:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:user
            }
        ],
        messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:message,
                default:[]
            }
        ]
},{timestamps:true})


const convSchema = mongoose.model("conversation", conversationSchema)

export default convSchema;