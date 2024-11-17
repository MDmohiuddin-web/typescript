// a type is  depend on another type its coll conditional type
type a1 = number;
type a3 = undefined;

type a4 = number;

type a2 = a1 extends string ? string : null;
// nested conditional type

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type sheiks = {
  wife1: string;
  wife2: string;
};

type A = keyof sheiks; //wife1 | wife2
////////////////////////wife1 extends wife1|wife2

type checkProperty<T, K> = K extends keyof sheiks ? true : false;

type checkWife1 = checkProperty<sheiks, "wife1">;
// answer is true 
// if i use checkProperty<sheiks, "wife3">; // answer is false

