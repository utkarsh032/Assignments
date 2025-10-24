import express from "express";
import {
  getAllPortfolio,
  getPortfolioBySymbol,
} from "../modules/portfolio/portfolio.controller";

const portfolioRouter = express.Router();

// Portfolio Routes
portfolioRouter.get("/", getAllPortfolio);
portfolioRouter.get("/:symbol", getPortfolioBySymbol);

export default portfolioRouter;
