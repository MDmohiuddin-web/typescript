// Mandatory props that must be include in the object
type Mandatory = {
  name: string;
  age: number;
  salary: number;
};

// generic function that take an object and add a new key value pair
// The generic type T must extend the Mandatory type, which means that the object
// must have the name, age and salary props
const AddMeMyCrashMind = <T extends Mandatory>(myInfo: T): T => {
  const crash = "crash";
  const newData = { ...myInfo, crash };
  return newData;
};

// type for the myInfo object
type MYinfoType = {
  name: string;
  age: number;
  salary: number;
};

// create an object with the required props
const myInfo: MYinfoType = {
  name: "mohi",
  age: 23,
  salary: 20000,
};

// call the function and log the result
const results = AddMeMyCrashMind<MYinfoType>(myInfo);
console.log(results);

/**
 * This example show how to create a union type manually
 * and how to create a union type using the keyof operator
 */
type ParsonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "mohi" | "age" | "address"; //manual create a union type

type NewTypeUsingKeyof = keyof ParsonType; //using keyof

// const a:NewType="address"
// const b:NewTypeUsingKeyof="hh" //only available as 'mohi'|'age'|'address' ect...

/**
 * This example show how to use the keyof operator to get the priority of a value
 * in an object
 */
function getpriority<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];




}
const property = getpriority({ name: "mohi", age: 23, address: "dhaka" }, 'name'); //we can force the type 
// const property=getpriority({name:"mohi",age:23,address:"dhaka"},'hello')
console.log(property);

