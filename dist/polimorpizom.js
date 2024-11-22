"use strict";
/**
 * Class Persona with method takeNap
 */
class persona {
    /**
     * method to take a nap
     */
    taken() {
        console.log("take nap 7 hours");
    }
}
/**
 * Class student extends Persona
 */
class student extends persona {
    /**
     * override method takeNap
     */
    taken() {
        console.log("take nap 10 hours");
    }
}
/**
 * Class developes extends Persona
 */
class developes extends persona {
    /**
     * override method takeNap
     */
    taken() {
        console.log("take nap 8 hours");
    }
}
/**
 * Function to get nap
 * @param person
 */
function getNap(person) {
    person.taken();
}
/**
 * testing
 */
const student01 = new persona();
const student02 = new student();
const student03 = new developes();
getNap(student01);
getNap(student02);
getNap(student03);
/**
 * Class Shape with method getArea
 */
class shape {
    /**
     * method to get area of shape
     */
    getArea() {
        return 0;
    }
}
/**
 * Class Circle extends Shape
 */
class circle extends shape {
    /**
     * constructor
     * @param radius
     */
    constructor(radius) {
        super();
        this.radius = radius;
    }
    /**
     * override method getArea
     */
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
/**
 * Class Rectangle extends Shape
 */
class rectangle extends shape {
    /**
     * constructor
     * @param width
     * @param height
     */
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    /**
     * override method getArea
     */
    getArea() {
        return this.width * this.height;
    }
}
/**
 * Function to get area of shape
 * @param shape
 */
function getAreaShape(shape) {
    console.log(shape.getArea());
}
/**
 * testing
 */
getAreaShape(new circle(10));
getAreaShape(new rectangle(10, 20));
