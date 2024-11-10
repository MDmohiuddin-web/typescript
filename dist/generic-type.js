"use strict";
const relation = ["hello", "world"];
// console.log(relation);
const relationWithSalary = [{ "name": "john", "age": 25 }, 'salary:10000'];
console.log(relationWithSalary);
// Array of numbers using regular array syntax
const rollNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rollNumberArray);
// Array of numbers using generic array type
const rollNumberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rollNumberArray2);
// Array of strings using generic array type
const rollNumberArray3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(rollNumberArray3);
// Array of booleans using generic array type
const rollNumberArray4 = [true, false];
console.log(rollNumberArray4);
// Array that can hold both numbers and strings using union type
const rollNumberArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(rollNumberArray5);
// Array that can hold numbers, strings, and booleans using union type
const rollNumberArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", true, false];
console.log(rollNumberArray6);
// Array of objects with specific structure using generic array type
const rollNumberArray7 = [{ names: "sachin", rolls: 1 }, { names: "sachin", rolls: 2 }];
console.log(rollNumberArray7);
