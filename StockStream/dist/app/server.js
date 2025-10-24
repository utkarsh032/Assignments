"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const stock_routes_1 = __importDefault(require("../routes/stock.routes"));
const errorHandler_1 = require("../middleware/errorHandler");
const order_routes_1 = __importDefault(require("../routes/order.routes"));
const fill_routes_1 = __importDefault(require("../routes/fill.routes"));
const portfolio_routes_1 = __importDefault(require("../routes/portfolio.routes"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(errorHandler_1.errorHandler);
// Basic route to check server status
app.get("/", (req, res) => {
    res.send("Stock Stream Server is running");
});
app.use("/api/stocks", stock_routes_1.default);
app.use("/api/orders", order_routes_1.default);
app.use("/api/fills", fill_routes_1.default);
app.use("/api/portfolio", portfolio_routes_1.default);
exports.default = app;
