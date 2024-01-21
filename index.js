console.log("Js classes");

// Class with instance properties and instance methods
class Rectangle {
  //instance properties to create variables to be used
  constructor(_height, _width) {
    this.height = _height;
    this.width = _width;
  }

  //instance methods to perfom a certain task or calculations
  getArea() {
    return this.width * this.height;
  }
}

// Printing results
const one = new Rectangle(23, 45);
console.log(one);
console.log(one.getArea());
