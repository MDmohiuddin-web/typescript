"use strict";
// Create first crush object
const crush1 = {
    name: "ali",
    age: 20,
    profession: "fullstack developer",
    address: "feni",
};
// Create second crush object
const crush2 = {
    name: "polok",
    age: 20,
    profession: "frontend developer",
    address: "dagurbuia",
};
// Variable to store crush marriage status
const isCrushMarried = false;
const courseName = "Next level web development";
// Function to perform mathematical operations using callback
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
// Call calculate function with addition operation
calculate(10, 20, (x, y) => x + y);
// Call calculate function with subtraction operation
calculate(10, 20, (x, y) => x - y);
// Call calculate function with multiplication operation
calculate(10, 20, (x, y) => x * y);
// Call calculate function with division operation
calculate(10, 20, (x, y) => x / y);
