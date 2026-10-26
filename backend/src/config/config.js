import dotenv from "dotenv"

dotenv.config();

export const config = {
    MONGO_URI : process.env.MONGO_URI,
    access_secret : process.env.ACCESS_SECRET,
    refresh_secret : process.env.REFRESH_SECRET,
    imagekit_api: process.env.IMAGEKIT_API
}

