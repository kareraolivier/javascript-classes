class Square {
  constructor(_width, _height) {
    this.width = _width;
    this.height = _height;
  }

  // getter
  /**
   * A getter is used to access the value of an object's property.
   * It is defined using the get keyword followed by a function.
   * This function returns the value of a property.
   */
  get area() {
    return this.height * this.width;
  }

  /**
   * setter it takes single argument it can be used
   * to overwrite properties of constructors
   *
   * A setter is used to modify the value of an object's property.
   * It is defined using the set keyword followed by a function.
   * This function typically takes one parameter,
   * which is the new value being assigned to the property.
   * @param {number} _squareheight
   */
  set squareheight(_squareheight) {
    this.height = _squareheight;
  }
}

const results = new Square(12, 4);
results.squareheight = 12;
console.log(results.area);
