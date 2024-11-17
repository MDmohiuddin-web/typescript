"use strict";
// generic function that take an object and add a new key value pair
// The generic type T must extend the Mandatory type, which means that the object
// must have the name, age and salary props
const AddMeMyCrashMind = (myInfo) => {
    const crash = "crash";
    const newData = Object.assign(Object.assign({}, myInfo), { crash });
    return newData;
};
// create an object with the required props
const myInfo = {
    name: "mohi",
    age: 23,
    salary: 20000,
};
// call the function and log the result
const results = AddMeMyCrashMind(myInfo);
console.log(results);
// const a:NewType="address"
// const b:NewTypeUsingKeyof="hh" //only available as 'mohi'|'age'|'address' ect...
/**
 * This example show how to use the keyof operator to get the priority of a value
 * in an object
 */
function getpriority(obj, key) {
    return obj[key];
}
const property = getpriority({ name: "mohi", age: 23, address: "dhaka" }, 'name'); //we can force the type 
// const property=getpriority({name:"mohi",age:23,address:"dhaka"},'hello')
console.log(property);
