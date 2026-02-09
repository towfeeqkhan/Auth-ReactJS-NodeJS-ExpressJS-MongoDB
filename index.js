import express from "express";
import connectDB from "./config/db.js";

await connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Live");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
