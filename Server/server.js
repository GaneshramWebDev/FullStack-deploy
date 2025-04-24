import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/Mongodb.js";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://jwt-auth-2-z680.onrender.com", "http://localhost:3000"],
    credentials: true,
  })
);

// Default Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is started on port ${PORT}`);
  connectDB();
});
