import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import airtableRoutes from "./routes/airtable.routes.js";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./utils/errorHandler.js";
import connectDB from "./config.js/db.js";
import logger from "./utils/logger.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(morgan("combined", { stream: logger.stream }));

// Database connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/airtable", airtableRoutes);

// Error handling
app.use(errorHandler);

export default app;
