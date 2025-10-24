import { Request, Response } from "express";
import { PortfolioService } from "./portfolio.service";

const portfolioService = new PortfolioService();

export const getAllPortfolio = async (req: Request, res: Response) => {
  try {
    const data = await portfolioService.getAll();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getPortfolioBySymbol = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const data = await portfolioService.getBySymbol(symbol);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
