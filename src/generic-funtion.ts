// Generic function that creates an array with a single element of type T

const createArray = <T>(param: T): T[] => {
  return [param];
};
function createArroyo<T>(param: T): T[] {
  return [param];
}
console.log(createArroyo<number>(1));

// Example usage with string type
console.log(createArray<string>("hello"));

// Interface defining person object structure
interface parson {
  name: string;
}

// Example usage with custom person interface type
console.log(createArray<parson>({ name: "sabin" }));

// Generic function that creates a tuple with two elements of types X and Y
const createArrayTopple = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

// Example usage with string tuple
console.log(createArrayTopple<string, string>("hello", "world"));

// Interfaces defining person and country object structures
interface parsons {
  name: string;
}
interface parsons2 {
  country: string;
}

// Example usage with custom person and country interface types
console.log(
  createArrayTopple<parsons, parsons2>({ name: "sain" }, { country: "india" })
);
