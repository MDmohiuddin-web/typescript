// // // interface
// // interface Vehicle {
// //     name: string;
// //     model: string;
// // }

// // const vehicle = {
// //   name: "Car",
// //   model: "Toyota",
// // };

// interface Vehicles {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class vehicle implements Vehicles {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log("im starting engine");
//   }
//   stopEngine(): void {
//     console.log("im stope engine");
//   }
//   move(): void {
//     console.log("move engine");
//   }
//   test() {
//     console.log("im for testing purpose ");
//   }
// }

// const vehicle1 = new vehicle('car','toyota',2000);
// console.log(vehicle1);

// // // abstract class

abstract class vehicle {
    constructor(
      public name: string,
      public brand: string,
      public model: number
    ) {}
   abstract startEngine(): void
   abstract stopEngine(): void
    move(): void {
      console.log("move engine");
    }
   
  }

  class car extends vehicle{
   startEngine(): void {
       console.log('start engine');
   }
   stopEngine(): void {
       console.log('stop engine');
   }
  }
const car0=new car('bike',"honda",2000)
console.log(car0)

  
