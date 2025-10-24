"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = AppError;
function AppError(message, statusCode = 400, isOperational = true) {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.isOperational = isOperational;
    // Fix prototype chain
    Object.setPrototypeOf(error, new.target?.prototype ?? Object.prototype);
    Error.captureStackTrace(error, AppError);
    return error;
}
