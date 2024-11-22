"use strict";
/**
 * Example of using getter and setter in TypeScript
 * Getter and setter are used to control access to an object's properties
 * They are also used to add additional logic to the process of getting and setting a property
 */
class Person {
    /**
     * Constructor to initialize the object
     * @param name the name of the person
     */
    constructor(name) {
        this._name = name;
    }
    /**
     * Getter to get the name
     * @returns the name of the person
     */
    get name() {
        return this._name;
    }
    /**
     * Setter to set the name
     * @param name the new name of the person
     */
    set name(name) {
        this._name = name;
    }
}
/**
 * Create a new instance of Person
 */
const person = new Person("John");
/**
 * Log the name of the person
 */
person.name = "Jane";
console.log(person.name);
