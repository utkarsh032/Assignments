import express from "express";
import cors from "cors";
import "dotenv/config";
import stockRouter from "../routes/stock.routes";
import { errorHandler } from "../middleware/errorHandler";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Basic route to check server status
app.get("/", (req, res) => {
  res.send("Stock Stream Server is running");
});

app.use("/api/stocks", stockRouter);

export default app;
