// Define a type for crush information
type CrushType = {
  name: string,
  age?: number,
  profession: string,
  address: string,
};

// Create first crush object
const crush1: CrushType = {
  name: "ali",
  age: 20,
  profession: "fullstack developer",
  address: "feni",
};

// Create second crush object
const crush2: CrushType = {
  name: "polok",
  age: 20,
  profession: "frontend developer",
  address: "dagurbuia",
};

// Type for crush marriage status
type CrushMarriedType = boolean;

// Variable to store crush marriage status
const isCrushMarried: CrushMarriedType = false;

// Type for course name
type CourseNameType = string;
const courseName: CourseNameType = "Next level web development";

// Type for mathematical operation callback function
type OperationType = (x:number,y:number)=>number;

// Function to perform mathematical operations using callback
const calculate=(
    num1:number,
    num2:number,
    operation:OperationType
)=>{
    return operation(num1,num2);
}

// Call calculate function with addition operation
calculate(10,20,(x,y)=>x+y);
// Call calculate function with subtraction operation
calculate(10,20,(x,y)=>x-y);
// Call calculate function with multiplication operation
calculate(10,20,(x,y)=>x*y);
// Call calculate function with division operation
calculate(10,20,(x,y)=>x/y);