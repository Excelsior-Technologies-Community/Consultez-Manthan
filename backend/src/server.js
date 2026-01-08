console.log("SERVER FILE EXECUTED");

import dotenv from "dotenv";
import express from "express"
import cors from "cors"
const app = express()
dotenv.config();

import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
