/**
 * static methods
 * This is a method that is defined on class but not on the instanteded object
 * It does not requre an instance of a class to be used
 * A lot of static methods are what we call helper methods but they don't have object bound to them
 *
 * Static methods in JavaScript classes are functions that belong to the class itself, rather than to instances of the class.
 * This means that static methods can be called directly on the class, but not on objects created from the class.
 *
 */

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

  //static methods. here we do not use this keyword bcz there is no refers to this keyword
  static difference(height, width) {
    return height - width;
  }
}

const one = new Rectangle(22, 15);
console.log(one);
console.log(one.getArea());
//static methods can be called directly on the class
console.log(Rectangle.difference(one.height, one.width));
