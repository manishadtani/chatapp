import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js"
       
const secureRoute = async (req,res,next) => {
                console.log(req.cookies)
        try {
            const token  = req.cookies.jwt;
            console.log(token)
            if(!token){
                return res.status(401).json({message: "No token, Authorization Denied"})
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded)
            if(!decoded){
                return res.status(400).json({error:"Invalid Token"});
            }
            const user = await userModel.findById(decoded.userId).select("-password -confirmPassword")
            console.log(user)
            if(!user){
                return res.status(400).json({error :"user not found"})
            }
            req.user = user
            next();
        } catch (error) {
            console.log("Error in secure route: "+error)
        }
}

export default secureRoute




