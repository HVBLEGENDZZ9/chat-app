import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connecToDB from "./db/connectToDB.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    connecToDB();
    console.log("Server is running on port ${PORT}");
});


