import express from "express";
import cors from "cors";
import "dotenv/config";
import stockRouter from "../routes/stock.routes";
import { errorHandler } from "../middleware/errorHandler";
import orderRouter from "../routes/order.routes";
import fillRouter from "../routes/fill.routes";
import portfolioRouter from "../routes/portfolio.routes";

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
app.use("/api/orders", orderRouter);
app.use("/api/fills", fillRouter);
app.use("/api/portfolio", portfolioRouter);

export default app;
