// Ternary operator - A shorthand way of writing if-else statements
let age: number = 20;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
    
// }

// Using ternary operator to check age and assign message
const isAdult = age >= 10 ? "You are an adult." : "You are a minor.";
console.log(isAdult);


// Nullish coalescing operator (??) - Returns right-hand operand when left is null/undefined
const isAuthenticate=null
const userName=isAuthenticate ?? "guest" // If isAuthenticate is null/undefined, use "guest"
console.log(userName)

// Define User type with required and optional properties
type User={
    name:string
    age:number
    address:{
        city:"no city"
        road:"no road"
        home?:"no"  // Optional property
    }
} 

// Create user1 object of type User
const user1:User={
name:"sakib",
age:20,
address:{
    city:"no city",
    road:"no road"
}
}

// Using optional chaining (?.) and nullish coalescing (??) to safely access nested properties
const home=user1?.address?.home ?? "no home"
console.log(home)