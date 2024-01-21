/**
 * Js inheritance
 */

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  fullname() {
    return `your name is ${this.name} and you are  ${this.age}`;
  }
}

class Student extends Person {
  constructor(_name, _age, _marks) {
    super(_name, _age);
    this.marks = _marks;
  }
  getMarks() {
    // return `${this.name} got ${this.marks}`;
    return `${this.fullname()} and you got ${this.marks}`;
  }
}

const pone = new Person("karera", 32);
console.log(pone.fullname());

const sone = new Student("olivier", 32, 76);
console.log(sone.getMarks());
