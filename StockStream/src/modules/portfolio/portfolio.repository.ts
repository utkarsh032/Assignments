import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PortfolioRepository {
  async getAllPositions () {
    return prisma.position.findMany();
  }

  async getPositionBySymbol (symbol: string) {
    return prisma.position.findUnique({ where: { symbol } });
  }

  async updateOrCreatePosition (symbol: string, qty: number, avgCost: number) {
    return prisma.position.upsert({
      where: { symbol },
      update: { qty, avgCost },
      create: { symbol, qty, avgCost },
    });
  }
}
