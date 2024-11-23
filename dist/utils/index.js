"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const substract_1 = __importDefault(require("./substract"));
const multiply_1 = __importDefault(require("./multiply"));
exports.default = { subtract: substract_1.default, multiply: multiply_1.default };
