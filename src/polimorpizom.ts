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
  taken(): void {
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
  taken(): void {
    console.log("take nap 8 hours");
  }
}

/**
 * Function to get nap
 * @param person
 */
function getNap(person: persona) {
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
  getArea(): number {
    return 0;
  }
}

/**
 * Class Circle extends Shape
 */
class circle extends shape {
  /**
   * radius of circle
   */
  radius: number;

  /**
   * constructor
   * @param radius
   */
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  /**
   * override method getArea
   */
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

/**
 * Class Rectangle extends Shape
 */
class rectangle extends shape {
  /**
   * width and height of rectangle
   */
  width: number;
  height: number;

  /**
   * constructor
   * @param width
   * @param height
   */
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  /**
   * override method getArea
   */
  getArea(): number {
    return this.width * this.height;
  }
}

/**
 * Function to get area of shape
 * @param shape
 */
function getAreaShape(shape: shape) {
  console.log(shape.getArea());
}

/**
 * testing
 */
getAreaShape(new circle(10));
getAreaShape(new rectangle(10, 20));
