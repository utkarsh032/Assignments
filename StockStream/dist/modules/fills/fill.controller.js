"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFills = exports.getFillsByOrder = exports.createFill = void 0;
const fill_service_1 = require("./fill.service");
const fillService = new fill_service_1.FillService();
const createFill = async (req, res) => {
    try {
        const { orderId, price, qty } = req.body;
        const fill = await fillService.createFill(orderId, price, qty);
        res.status(201).json(fill);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createFill = createFill;
const getFillsByOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const fills = await fillService.getFillsByOrder(orderId);
        res.json(fills);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getFillsByOrder = getFillsByOrder;
const getAllFills = async (req, res) => {
    try {
        const fills = await fillService.getAllFills();
        res.json(fills);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getAllFills = getAllFills;
