// normal function - takes two numbers and returns their sum
function add(num1: number, num2: number = 30): number {
  // never use default value in function parameter first parameter
  return num1 + num2;
}
console.log(add(2, 2));

// arrow function - alternative syntax for adding two numbers
const add2 = (num1: number, num2: number): number => num1 + num2;
console.log(add2(1, 2));

// array of numbers from 1 to 9
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// create new array by squaring each number using map
const newArr = arr.map((num: number) => num * num);
console.log(newArr);

// object type definition with name, salary and method to add salary
const parson: {
  name: string;
  salary: number;
  addsalary: (mony: number) => number;
} = {
  name: "mohi",
  salary: 2000,
  // method to add bonus money to base salary
  addsalary(mony: number) {
    return this.salary + mony;
  },
};

console.log(parson.addsalary(1000));


// sparid operator
//  this is a random names
const MyFriend=["sakib","rakib","rakibul","rakibul islam"]
const MyNewFriend=["sakib","rakib","rakibul","rakibul islam"]

const MyNewFriend2=[...MyFriend,...MyNewFriend]
console.log(MyNewFriend2)


// array of objects



