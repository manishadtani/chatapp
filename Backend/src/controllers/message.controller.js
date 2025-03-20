import conversationModel from '../models/conversation.model.js'
import messageModel from '../models/message.model.js'
export const sendMessageController = async (req,res)=>{
    console.log("message send")
    console.log(req.params.id)
    console.log(req.body.message)

    try { 
        const {message} = req.body;
        const {id:recieverId} = req.params;
        const senderId = req.user._id
        let conversation = await conversationModel.findOne({
            members:{$all:[senderId, recieverId]}
        })
        if(!conversation){
            conversation = await conversationModel.create({
                members:  [senderId, recieverId],
            })
        }

        const newMessage = new messageModel({
            senderId,
            recieverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json({
            message:"Message sent successfully", newMessage
        })

    } catch (error) {
            console.log(error)
            res.status(500).json({error: "Internal server error"})
    }

}