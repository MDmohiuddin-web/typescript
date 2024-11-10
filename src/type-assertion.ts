// Variable with 'any' type that can hold any value
let emy: any;
emy = "hello";

// Function to convert kilograms to grams
// Accepts either string or number as input
// Returns either string, number or undefined
function kilogram(param: string | number): string | number | undefined {
  // If parameter is string, convert to float and multiply by 1000
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `${value} gram`;
  }
  // If parameter is number, multiply by 1000
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

// Using type assertion 'as' to tell TypeScript the result is a number
const result = kilogram(100) as number;
// Using angle bracket syntax for type assertion to tell TypeScript the result is a string
const result2 = <string>kilogram('100') 
console.log(result,result2);