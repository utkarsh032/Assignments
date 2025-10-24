"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRepo = void 0;
const prisma_1 = __importDefault(require("../../app/prisma"));
exports.orderRepo = {
    create: (data) => prisma_1.default.order.create({ data }),
    findByClientOrderId: (clientOrderId) => prisma_1.default.order.findUnique({ where: { clientOrderId } }),
    getAll: (filters) => prisma_1.default.order.findMany({
        where: filters,
        orderBy: { createdAt: "desc" },
    }),
};
