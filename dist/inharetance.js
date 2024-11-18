"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours} hours`;
    }
}
class Student extends Parent {
    //   name: string;
    //   age: number;
    //   address: string;
    constructor(name, age, address) {
        super(name, age, address);
        //     this.name = name;
        //     this.age = age;
        //     this.address = address;
    }
}
const student1 = new Student("mohi", 23, "dhaka");
console.log(student1.makeSleep(7));
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours} hours`;
    }
    takeClass(NumOfClass) {
        return `This ${this.name} will take ${NumOfClass} classes`;
    }
}
const teacher1 = new Teacher("mohi", 23, "dhaka", "teacher");
console.log(teacher1.designation);
