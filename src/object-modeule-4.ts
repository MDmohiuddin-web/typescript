class Animal {
//  public name: string;
//  public species: string;
//  public sound: string;
  //parameter property 

  constructor(public name: string,public species: string,public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
}
//   arrow function not allow this keyword

 public makeSound() {
    console.log(`${this.name} makes ${this.sound}`);
  }

}

const cat= new Animal("Whiskers", "Cat", "Meow");
cat.makeSound();


const dog = new Animal("Buddy", "Dog", "Woof");
dog.makeSound();