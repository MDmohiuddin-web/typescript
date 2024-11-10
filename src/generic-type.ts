type genericArray<T>=Array<T>;

// Define a generic array type that can hold elements of any type T

// Array of numbers using regular array syntax
const rollNumberArray:number[]=[1,2,3,4,5,6,7,8,9,10];
console.log(rollNumberArray);

// Array of numbers using generic array type
const rollNumberArray2:genericArray<number>=[1,2,3,4,5,6,7,8,9,10];
console.log(rollNumberArray2);

// Array of strings using generic array type
const rollNumberArray3:genericArray<string>=["1","2","3","4","5","6","7","8","9","10"];
console.log(rollNumberArray3);

// Array of booleans using generic array type
const rollNumberArray4:genericArray<boolean>=[true,false]
console.log(rollNumberArray4);

// Array that can hold both numbers and strings using union type
const rollNumberArray5:genericArray<string|number>=[1,2,3,4,5,6,7,8,9,10,"1","2","3","4","5","6","7","8","9","10"];
console.log(rollNumberArray5);

// Array that can hold numbers, strings, and booleans using union type
const rollNumberArray6:genericArray<string|number|boolean>=[1,2,3,4,5,6,7,8,9,10,"1","2","3","4","5","6","7","8","9","10",true,false];
console.log(rollNumberArray6);

type namRolls={
    names:string,
    rolls:number

}

// Array of objects with specific structure using generic array type
const rollNumberArray7:genericArray<namRolls>=[{names:"sachin",rolls:1},{names:"sachin",rolls:2}];
console.log(rollNumberArray7);