"use strict";
// Generic function that creates an array with a single element of type T
const createArray = (param) => {
    return [param];
};
function createArroyo(param) {
    return [param];
}
console.log(createArroyo(1));
// Example usage with string type
console.log(createArray("hello"));
// Example usage with custom person interface type
console.log(createArray({ name: "sabin" }));
// Generic function that creates a tuple with two elements of types X and Y
const createArrayTopple = (param1, param2) => {
    return [param1, param2];
};
// Example usage with string tuple
console.log(createArrayTopple("hello", "world"));
// Example usage with custom person and country interface types
console.log(createArrayTopple({ name: "sain" }, { country: "india" }));
