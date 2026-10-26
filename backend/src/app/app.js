import express from "express";
import { config } from "../config/config.js";
import userRoutes from "../routes/user.routes.js";


const app = express();

app.use(express.json());

app.use("/auth",userRoutes)


export default app;