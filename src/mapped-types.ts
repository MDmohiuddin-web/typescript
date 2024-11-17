// Create an array of numbers and then map through it to create an array of strings
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrings =arrayOfNumbers.map((num) => num.toString());
console.log(arrayOfStrings);

// Create an interface for volume with properties hight, width and depth
type volume={
    hight:number,
    width:number,
    depth:number
}

// Create an interface for area that takes a generic type T
type area<T>={
    // Use the mapped type to create an index signature that
    // maps all properties of T to the type of that property
    [k in keyof T]:T[k]
}

// Create an object of type area with properties hight and width
const area10:area<{hight:number;width:number}>={hight:10,width:20};
area10.hight=10;

