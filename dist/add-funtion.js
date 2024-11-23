"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./utils/index"));
//method is amy name 
const addition = (a, b) => a + b;
console.log(addition("hello ", "world"));
// method import form utils index.ts
console.log(index_1.default.subtract(10, 5));
console.log(index_1.default.multiply(10, 5));
