import jwt from "jsonwebtoken"
import { config } from "../config/config.js"


export const generateToken = ({userId})=>{
    accessToken = jwt.sign({id:userId},config.access_secret);
    refreshToken = jwt.sign({id:userId},config.refresh_secret);

    return {accessToken,refreshToken}

}

export const verifyAccessToken = (token)=>{
    return jwt.verify(token,config.access_secret)
}

export const verifyRefreshToken = (token)=>{
    return jwt.verify(token,config.refresh_secret)
}