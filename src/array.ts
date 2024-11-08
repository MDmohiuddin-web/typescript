// Array of strings containing names
const names:string[] = ["Alice", "Bob", "Eve"];

// Mapping through names array and logging each name
names.map((name)=>{
    console.log(name);
})

// Array of numbers containing roll numbers
const rollNo:number[] = [1,2,3,4,5];

// Mapping through roll numbers array and logging each number
rollNo.map((roll)=>{
    console.log(roll);
})

// Mixed array containing both numbers and strings
const mixed:any[] = [1,2,3,4,5,"Alice", "Bob", "Eve"];
console.log(mixed);

// Tuple example with fixed length array containing number and string
const users:[number,string] = [1,"Alice"];
console.log(users);