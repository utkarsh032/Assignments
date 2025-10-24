"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = zod_1.z.object({
    symbol: zod_1.z.string().min(1),
    side: zod_1.z.enum(["buy", "sell"]),
    qty: zod_1.z.number().positive(),
    clientOrderId: zod_1.z.string().optional(),
});
