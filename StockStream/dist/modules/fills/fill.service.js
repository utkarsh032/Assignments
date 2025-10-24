"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillService = void 0;
const fill_repository_1 = require("./fill.repository");
const fillRepo = new fill_repository_1.FillRepository();
class FillService {
    async createFill(orderId, price, qty) {
        return fillRepo.createFill({
            orderId,
            price,
            qty,
            timestamp: new Date(),
        });
    }
    async getFillsByOrder(orderId) {
        return fillRepo.getFillsByOrderId(orderId);
    }
    async getAllFills() {
        return fillRepo.getAllFills();
    }
}
exports.FillService = FillService;
