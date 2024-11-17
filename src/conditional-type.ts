// Define some types to demonstrate conditional and nested conditional types
type a1 = number;
type a3 = undefined;
type a4 = number;

// Conditional type: if a1 extends string, resolve to string, otherwise null
type a2 = a1 extends string ? string : null;

// Nested conditional type example
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

// Define an object type with some properties
type sheiks = {
  wife1: string;
  wife2: string;
};

// Extract keys of sheiks as a union type
type A = keyof sheiks; // Results in 'wife1' | 'wife2'

// Conditional type to check if a key K exists in type T
type checkProperty<T, K> = K extends keyof T ? true : false;

// Example usage of checkProperty to verify existence of 'wife1' key in sheiks
type checkWife1 = checkProperty<sheiks, "wife1">; // Results in true

// Define a union type with some string literals
type bandobi = 'mo' | 'rem' | 'jem';

// Conditional type to remove a specific type K from union T
type removeBandobi<T, K> = T extends K ? never : T;

// Example usage of removeBandobi to remove 'mo' from bandobi
type removeMo = removeBandobi<bandobi, 'mo'>; // Results in 'rem' | 'jem'

