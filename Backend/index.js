import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
const app = express();

dotenv.config();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173", 
    credentials: true,
};
app.use(cors(corsOptions)); 


app.listen(3000, () => {
     
    console.log("Server is running on port 3000");
});