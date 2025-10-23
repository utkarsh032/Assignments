import { Router } from "express";
import {
  createStock,
  deleteStock,
  getAllStocks,
  updateStock,
} from "../controllers/stock.controller";

const stockRouter = Router();

stockRouter.get("/", getAllStocks);
stockRouter.post("/", createStock);
stockRouter.put("/:id", updateStock);
stockRouter.delete("/:id", deleteStock);

export default stockRouter;
