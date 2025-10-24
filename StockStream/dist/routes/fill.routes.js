"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fill_controller_1 = require("../modules/fills/fill.controller");
const fillRouter = express_1.default.Router();
fillRouter.post("/", fill_controller_1.createFill);
fillRouter.get("/", fill_controller_1.getAllFills);
fillRouter.get("/:orderId", fill_controller_1.getFillsByOrder);
exports.default = fillRouter;
