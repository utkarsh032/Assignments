"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOrders = exports.createOrder = void 0;
const order_service_1 = require("./order.service");
const createOrder = async (req, res) => {
    try {
        const order = await order_service_1.orderService.createOrder(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};
exports.createOrder = createOrder;
const listOrders = async (req, res) => {
    const orders = await order_service_1.orderService.listOrders(req.query);
    res.json(orders);
};
exports.listOrders = listOrders;
