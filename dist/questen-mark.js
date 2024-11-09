"use strict";
var _a, _b;
// Ternary operator - A shorthand way of writing if-else statements
let age = 20;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }
// Using ternary operator to check age and assign message
const isAdult = age >= 10 ? "You are an adult." : "You are a minor.";
console.log(isAdult);
// Nullish coalescing operator (??) - Returns right-hand operand when left is null/undefined
const isAuthenticate = null;
const userName = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "guest"; // If isAuthenticate is null/undefined, use "guest"
console.log(userName);
// Create user1 object of type User
const user1 = {
    name: "sakib",
    age: 20,
    address: {
        city: "no city",
        road: "no road"
    }
};
// Using optional chaining (?.) and nullish coalescing (??) to safely access nested properties
const home = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "no home";
console.log(home);
