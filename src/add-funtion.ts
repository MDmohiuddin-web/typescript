import method from './utils/index'
//method is amy name 
const addition = (a: string, b: string): string => a + b;

console.log(addition("hello ", "world"));
// method import form utils index.ts
console.log(method.subtract(10, 5));
console.log(method.multiply(10, 5));