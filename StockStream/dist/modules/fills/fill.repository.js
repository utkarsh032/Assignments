"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FillRepository {
    async createFill(data) {
        return prisma.fill.create({ data });
    }
    async getFillsByOrderId(orderId) {
        return prisma.fill.findMany({ where: { orderId } });
    }
    async getAllFills() {
        return prisma.fill.findMany();
    }
}
exports.FillRepository = FillRepository;
