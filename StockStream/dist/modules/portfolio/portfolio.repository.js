"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PortfolioRepository {
    async getAllPositions() {
        return prisma.position.findMany();
    }
    async getPositionBySymbol(symbol) {
        return prisma.position.findUnique({ where: { symbol } });
    }
    async updateOrCreatePosition(symbol, qty, avgCost) {
        return prisma.position.upsert({
            where: { symbol },
            update: { qty, avgCost },
            create: { symbol, qty, avgCost },
        });
    }
}
exports.PortfolioRepository = PortfolioRepository;
