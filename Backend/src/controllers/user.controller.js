import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createController = async (req,res)=>{
        console.log(req.body)
        try {
            
            const {fullname, email, password, confirmPassword} = req.body

            if(!fullname){
                return res.status(401).json({message:"Enter Fullname"})
            }
            if(!email){
                return res.status(401).json({message:"Enter Email"})
            }
            if(!password){
                return res.status(401).json({message:"Enter Password"})
            }
            if(!confirmPassword){
                return res.status(401).json({message:"Enter Confirm Password"})
            }
            if(password !== confirmPassword){
                return res.status(401).json({message:"Password do not match"})
            }

            const isUser = await userModel.findOne({email})
            if(isUser){
                return res.status(400).json({message:"User already registered"})
            }

            const hashPassword = await bcrypt.hash(password, 10)

            const user = await userModel.create({
                fullname,
                email,
                password:hashPassword,
                confirmPassword:hashPassword
            })

            const token = jwt.sign({userId:user._id, userEmail:user.email} , process.env.JWT_SECRET)
            res.cookie("jwt",token,{
                httpOnly:true,
                secure:true,
                sameSite:"none"
            })
            res.status(200).json({message:"user registered successfully", token:token, user:user})

        } catch (error) {
                console.log(error)
                res.status(501).json({message:"Internal server error"})
        }

      


         

}


export const loginController = async (req,res)=>{
    const {email, password} = req.body

    try {

    if(!email){
        return res.status(400).json({message:"Enter Email"})
    }
    if(!password){
        return res.status(400).json({message:"Enter Password"})
    }


    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({message:"Invalid Credentials"})
    }

    const Iscorrect = await bcrypt.compare(password, user.password)
    if(!Iscorrect){
        return res.status(400).json({message:"Invalid Credentials"})
    }

    const token = jwt.sign({userId:user._id, userEmail:user.email}, process.env.JWT_SECRET)
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none"
    })
    res.status(200).json({message:"User Login Successfully", token:token, user:user})
    } catch (error) {
            console.log(error)
            res.status(501).json({message:"Internal server error"})
    }

}


export const logoutController = async (req,res)=>{
        try {
            res.clearCookie("jwt")
            res.status(200).json({message:"user Logged out successfully"})
        } catch (error) {
            console.log(error)
            res.status(501).json({message:"Internal server error"})
        }
}