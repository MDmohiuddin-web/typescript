"use strict";
// Create a user object using the type alias
const userWhithTypeAlias = {
    name: "John", // Example name
    age: 20, // Example age
};
// Create a user object using the interface
const userWhithInterface = {
    name: "interface", // Example name
    age: 200, // Example age
};
// Create a user object using the extended interface
const user0 = {
    name: "extended", // Example name
    age: 200, // Example age
    role: "admin", // User's role
};
// Implement the function using the interface type
const adbe = (a, b) => {
    // we can use any type of function in interface and type alias also
    // Return the sum of the two numbers
    return a + b;
};
// Create an array of numbers using the roll type
const rollNou = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Map through the array and log each number
rollNou.map((num) => {
    console.log(num);
});
// Test the addition function with sample numbers
console.log(adbe(100, 2));
// Log all user objects to console to verify their structure
console.log(userWhithTypeAlias);
console.log(userWhithInterface);
console.log(user0);
