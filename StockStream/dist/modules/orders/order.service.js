"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const AppError_1 = require("../../core/errors/AppError");
const order_repository_1 = require("./order.repository");
const order_validator_1 = require("./order.validator");
exports.orderService = {
    createOrder: async (payload) => {
        const parsed = order_validator_1.createOrderSchema.parse(payload);
        if (parsed.clientOrderId) {
            const existing = await order_repository_1.orderRepo.findByClientOrderId(parsed.clientOrderId);
            if (existing) {
                if (existing.symbol === parsed.symbol &&
                    existing.side === parsed.side &&
                    existing.qty === parsed.qty) {
                    return existing; // idempotent success
                }
                else {
                    throw (0, AppError_1.AppError)("Conflict: clientOrderId with different payload", 409);
                }
            }
        }
        const order = await order_repository_1.orderRepo.create(parsed);
        return order;
    },
    listOrders: async (filters) => {
        return order_repository_1.orderRepo.getAll(filters);
    },
};
