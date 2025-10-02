import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import weatherRouter from "./routers/weatherRouter.js";

dotenv.config();  // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json());  // Built-in Express method to parse JSON bodies
app.use(cors({ origin: process.env.FRONTEND_URL }));  // Enable CORS for cross-origin requests

// Routes
app.use("/api/weather", weatherRouter);  // All weather-related routes are prefixed with /api/weather

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});