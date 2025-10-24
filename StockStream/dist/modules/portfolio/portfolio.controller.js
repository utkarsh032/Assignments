"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioBySymbol = exports.getAllPortfolio = void 0;
const portfolio_service_1 = require("./portfolio.service");
const portfolioService = new portfolio_service_1.PortfolioService();
const getAllPortfolio = async (req, res) => {
    try {
        const data = await portfolioService.getAll();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllPortfolio = getAllPortfolio;
const getPortfolioBySymbol = async (req, res) => {
    try {
        const { symbol } = req.params;
        const data = await portfolioService.getBySymbol(symbol);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getPortfolioBySymbol = getPortfolioBySymbol;
