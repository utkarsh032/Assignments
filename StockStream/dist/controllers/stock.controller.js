"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStock = exports.updateStock = exports.createStock = exports.getAllStocks = void 0;
const prisma_1 = __importDefault(require("../app/prisma"));
const logger_1 = __importDefault(require("../utils/logger"));
const stock_validator_1 = require("../validators/stock.validator");
// Controller to get all stocks
const getAllStocks = async (req, res) => {
    try {
        const stocks = await prisma_1.default.stock.findMany();
        res.json(stocks);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching stocks", error });
    }
};
exports.getAllStocks = getAllStocks;
// Controller to create a new stock
const createStock = async (req, res) => {
    try {
        const parsed = stock_validator_1.stockSchema.parse(req.body);
        const stock = await prisma_1.default.stock.create({
            data: parsed,
        });
        logger_1.default.info(`Stock created: ${parsed.symbol}`);
        res.status(201).json(stock);
    }
    catch (error) {
        logger_1.default.error(error);
        if (error.name === "ZodError") {
            res.status(400).json({ message: error.errors });
        }
        else {
            res.status(500).json({ message: "Error creating stock", error });
        }
    }
};
exports.createStock = createStock;
// Controller to update stock price
const updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { price } = req.body;
        const updatedStock = await prisma_1.default.stock.update({
            where: { id: Number(id) },
            data: { price },
        });
        res.json(updatedStock);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating stock", error });
    }
};
exports.updateStock = updateStock;
// Controller to delete a stock
const deleteStock = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.stock.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Stock deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting stock", error });
    }
};
exports.deleteStock = deleteStock;
