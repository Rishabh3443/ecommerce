import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs"
import userModel from "../model/users.model.js";
import { generateToken } from "../utils/auth.js";


const register = async (req,res)=>{


    const {name, email,password} = req.body;

    const isemail = await userModel.findOne({email})

    if(isemail){
        return res.status(400).json({
            message:"user is already exist",
            errors:{
                path:email,
                message:"user already exist"
            }
        })
    }

    const user = await userModel.create({
        email,
        name,
        password: await bcrypt.hash(password,10)
    })

    const {accessToken,refreshToken} = generateToken({userId:user._id});

    user.refreshToken = refreshToken 
    await user.save()

    res.cookie("refreshToken",refreshToken,{
        httpOnly:true
    })

    res.status(200).json({
        message:"user registered successfully",
        user:{
            email:user.email,
            name:user.name
        },
        accessToken,
    })

}