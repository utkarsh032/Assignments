import { Request, Response } from "express";
import { FillService } from "./fill.service";

const fillService = new FillService();

export const createFill = async (req: Request, res: Response) => {
  try {
    const { orderId, price, qty } = req.body;
    const fill = await fillService.createFill(orderId, price, qty);
    res.status(201).json(fill);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getFillsByOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const fills = await fillService.getFillsByOrder(orderId);
    res.json(fills);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllFills = async (req: Request, res: Response) => {
  try {
    const fills = await fillService.getAllFills();
    res.json(fills);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
