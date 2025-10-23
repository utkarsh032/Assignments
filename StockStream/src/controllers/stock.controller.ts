import { Request, Response } from "express";
import prisma from "../app/prisma";

// Controller to get all stocks
export const getAllStocks = async (req: Request, res: Response) => {
  try {
    const stocks = await prisma.stock.findMany();
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stocks", error });
  }
};

// Controller to create a new stock
export const createStock = async (req: Request, res: Response) => {
  try {
    const { symbol, companyName, price } = req.body;

    const stock = await prisma.stock.create({
      data: { symbol, companyName, price },
    });

    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error creating stock", error });
  }
};

// Controller to update stock price
export const updateStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    const updatedStock = await prisma.stock.update({
      where: { id: Number(id) },
      data: { price },
    });

    res.json(updatedStock);
  } catch (error) {
    res.status(500).json({ message: "Error updating stock", error });
  }
};

// Controller to delete a stock
export const deleteStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.stock.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting stock", error });
  }
};
