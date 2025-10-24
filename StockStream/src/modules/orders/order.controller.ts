import { Request, Response } from "express";
import { orderService } from "./order.service";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const listOrders = async (req: Request, res: Response) => {
  const orders = await orderService.listOrders(req.query);
  res.json(orders);
};
