"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const portfolio_repository_1 = require("./portfolio.repository");
const portfolioRepo = new portfolio_repository_1.PortfolioRepository();
class PortfolioService {
    async getAll() {
        return portfolioRepo.getAllPositions();
    }
    async getBySymbol(symbol) {
        return portfolioRepo.getPositionBySymbol(symbol);
    }
    async updatePosition(symbol, qty, avgCost) {
        return portfolioRepo.updateOrCreatePosition(symbol, qty, avgCost);
    }
}
exports.PortfolioService = PortfolioService;
