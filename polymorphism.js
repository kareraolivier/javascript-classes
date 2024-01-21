/**
 * Js polymorphism
 *
 * Polymorphism in JavaScript, as in other object-oriented programming languages,
 * is a concept that allows objects of different classes to be treated as objects of a common superclass.
 * It's a core principle in OOP that enables an entity to take on many forms, hence the term "polymorphism"
 * (many shapes). In JavaScript, polymorphism is mostly achieved through inheritance and method overriding.
 */

class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog Barks");
  }
}

class Cat extends Animal {
  makeSound() {
    super.makeSound();
    console.log("Cat Meow");
  }
}

function triggerSound(animal) {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

triggerSound(dog);
triggerSound(cat);
