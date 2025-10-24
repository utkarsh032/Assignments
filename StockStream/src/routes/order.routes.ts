import express from "express";
import { createOrder, listOrders } from "../modules/orders/order.controller";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", listOrders);

export default orderRouter;
