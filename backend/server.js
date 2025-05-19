import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connecToDB from "./db/connectToDB.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
// app.get("/", (req,res)=>{
//     res.send("Hello World");
// });

app.listen(port, () => {
    connecToDB();
    console.log('Server is running on port ${PORT}');
});


