//key of guard
/*
 * using key of type guard
 * we can narrow the type of object
 */
type Alfanumeric = string | number;
function adds(num1: Alfanumeric, num2: Alfanumeric): Alfanumeric {
  // never use default value in function parameter first parameter
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

adds(1, 2);
adds("1", "2");

//in guard
/*
 * using in type guard
 * we can narrow the type of object
 */
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function gesturer(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `im admin user and my role is ${user.role}`;
  } else {
    return `im normal user`;
  }
}

const user11: NormalUser = {
  name: "normal",
};
const admin1: AdminUser = {
  name: "admin",
  role: "admin",
};
console.log(gesturer(user11));
console.log(gesturer(admin1));

//instanceof guard
/*
 * using instanceof type guard
 * we can narrow the type of object
 */
class Animals {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} makes ${this.species} sound`);
  }
}

class Dog extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`${this.name} barks`);
  }
}

class cats extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log(`${this.name} meows`);
  }
}

function IsDog(animal: Animals): animal is Dog {
  return animal instanceof Dog;
}
function IsCat(animal: Animals): animal is cats {
  return animal instanceof cats;
}

function getAnimal(animal: Animals) {
  if (IsDog(animal)) {
    animal.makeBark();
  } else if (IsCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
}

const dog1 = new Dog("dog", "dog"); //instance => dog
const cat1 = new cats("cat", "cat"); //instance => cat

getAnimal(dog1);
getAnimal(cat1);

