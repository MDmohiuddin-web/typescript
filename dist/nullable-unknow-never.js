"use strict";
// Function to search for a name, accepting string, null, or undefined
const searchName = (value) => {
    // Check if value is null
    if (value === null) {
        console.log("there is nothing to search");
    }
    // Check if value is undefined
    else if (value === undefined) {
        console.log("value is undefined");
    }
    // If value is a string, process it
    else {
        console.log("found value");
    }
};
// Test cases
searchName(null); // Testing with null
searchName(undefined); // Testing with undefined
searchName("hello"); // Testing with string value
// --kmh^-1 --->ms^-1
const getmyspeed = (speed) => {
    if (typeof speed === "number") {
        const convertedspeed = speed * 1000 / 3600;
        return convertedspeed;
    }
    else if (typeof speed === "string") {
        const convertedspeed = parseInt(speed) * 1000 / 3600;
        return convertedspeed;
    }
    else {
        return new Error("wrong input");
    }
};
console.log(getmyspeed(10));
console.log(getmyspeed("10"));
