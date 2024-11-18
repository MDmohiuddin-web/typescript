"use strict";
function adds(num1, num2) {
    // never use default value in function parameter first parameter
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
adds(1, 2);
adds("1", "2");
function gesturer(user) {
    if ("role" in user) {
        return `im admin user and my role is ${user.role}`;
    }
    else {
        return `im normal user`;
    }
}
const user11 = {
    name: "normal",
};
const admin1 = {
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
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`${this.name} makes ${this.species} sound`);
    }
}
class Dog extends Animals {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`${this.name} barks`);
    }
}
class cats extends Animals {
    constructor(name, species) {
        super(name, species);
    }
    makeMeow() {
        console.log(`${this.name} meows`);
    }
}
function IsDog(animal) {
    return animal instanceof Dog;
}
function IsCat(animal) {
    return animal instanceof cats;
}
function getAnimal(animal) {
    if (IsDog(animal)) {
        animal.makeBark();
    }
    else if (IsCat(animal)) {
        animal.makeMeow();
    }
    else {
        animal.makeSound();
    }
}
const dog1 = new Dog("dog", "dog"); //instance => dog
const cat1 = new cats("cat", "cat"); //instance => cat
getAnimal(dog1);
getAnimal(cat1);
