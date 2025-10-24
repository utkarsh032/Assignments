"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const portfolio_controller_1 = require("../modules/portfolio/portfolio.controller");
const portfolioRouter = express_1.default.Router();
// Portfolio Routes
portfolioRouter.get("/", portfolio_controller_1.getAllPortfolio);
portfolioRouter.get("/:symbol", portfolio_controller_1.getPortfolioBySymbol);
exports.default = portfolioRouter;
