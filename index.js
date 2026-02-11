import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";

await connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
