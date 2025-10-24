import { PortfolioRepository } from "./portfolio.repository";

const portfolioRepo = new PortfolioRepository();

export class PortfolioService {
  async getAll () {
    return portfolioRepo.getAllPositions();
  }

  async getBySymbol (symbol: string) {
    return portfolioRepo.getPositionBySymbol(symbol);
  }

  async updatePosition (symbol: string, qty: number, avgCost: number) {
    return portfolioRepo.updateOrCreatePosition(symbol, qty, avgCost);
  }
}
