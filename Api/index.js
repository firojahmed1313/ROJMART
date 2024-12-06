import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//import connectDB from "./config/db.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser( ));
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from backend");
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

