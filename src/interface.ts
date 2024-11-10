// Define a type alias for user with basic properties
type user = {
  name: string;  // User's full name
  age: number;   // User's age in years
};

// Define an interface for user with the same properties as the type alias
// Interfaces are preferred when defining object shapes in TypeScript
interface IUser {
  // interface only for objects
  name: string;  // User's full name
  age: number;   // User's age in years
}

// Create a user object using the type alias
const userWhithTypeAlias: user = {
  name: "John",  // Example name
  age: 20,       // Example age
};

// Create a user object using the interface
const userWhithInterface: IUser = {
  name: "interface",  // Example name
  age: 200,          // Example age
};

// Extend the IUser interface to include a role property
// This demonstrates interface inheritance
interface extendedUser extends IUser {
  role: string;  // User's role in the system (e.g., admin, user)
}

// Create a user object using the extended interface
const user0: extendedUser = {
  name: "extended",  // Example name
  age: 200,         // Example age
  role: "admin",    // User's role
};

// Define a type alias for a function that takes two numbers and returns their sum
// This shows how to define function types using type aliases
type addNumber = (a: number, b: number) => number;

// Alternative way to define the same function type using an interface
interface addNumberInterface {
  (a: number, b: number): number;  // Function signature
}

// Implement the function using the interface type
const adbe: addNumberInterface = (a, b) => {
  // we can use any type of function in interface and type alias also
  // Return the sum of the two numbers
  return a + b;
};

// Define a type alias for an array of numbers
type roll = number[];

// Define an interface for an array of numbers using index signature
interface rollInterface {
//   [index: number]: string;  //if we want to use string in array
  [index: number]: number; //if we want to use number in array
}

// Create an array of numbers using the roll type
const rollNou: roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map through the array and log each number
rollNou.map((num: number) => {
  console.log(num);
});

// Test the addition function with sample numbers
console.log(adbe(100, 2));

// Log all user objects to console to verify their structure
console.log(userWhithTypeAlias);
console.log(userWhithInterface);
console.log(user0);