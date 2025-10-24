"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockSchema = void 0;
const zod_1 = require("zod");
exports.stockSchema = zod_1.z.object({
    symbol: zod_1.z.string().min(1, "Symbol is required"),
    companyName: zod_1.z.string().min(1, "Company name is required"),
    price: zod_1.z.number().positive("Price must be positive"),
});
