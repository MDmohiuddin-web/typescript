class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }
}

class Student extends Parent {




//   name: string;
//   age: number;
//   address: string;
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
//     this.name = name;
//     this.age = age;
//     this.address = address;
  }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours} hours`;
//   }
}

const student1 = new Student("mohi", 23, "dhaka");
console.log(student1.makeSleep(7));

class Teacher extends Parent {

  designation: string; //deferent
  constructor(name: string, age: number, address: string, designation: string) {
   super(name, age, address);
    this.designation = designation;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }

  
  takeClass(NumOfClass: number): string {
    return `This ${this.name} will take ${NumOfClass} classes`;
  }
}


const teacher1 = new Teacher("mohi", 23, "dhaka", "teacher");
console.log(teacher1.designation);