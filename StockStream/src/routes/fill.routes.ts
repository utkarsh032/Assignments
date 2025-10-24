import express from "express";
import {
  createFill,
  getAllFills,
  getFillsByOrder,
} from "../modules/fills/fill.controller";
const fillRouter = express.Router();

fillRouter.post("/", createFill);
fillRouter.get("/", getAllFills);
fillRouter.get("/:orderId", getFillsByOrder);

export default fillRouter;
