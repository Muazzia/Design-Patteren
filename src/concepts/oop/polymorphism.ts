// What is polymorphism
// Polymorphism means many forms where one thing can behave in multiple ways.
// There are 2 types: overriding and overloading.

abstract class Animal {
  constructor(protected name: string) {}

  abstract makeSound(): string;

  move(): string {
    return `${this.name} is moving`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return `${this.name} says woof`;
  }
}

class Cat extends Animal {
  makeSound(): string {
    return `${this.name} says meow`;
  }
}

const dog = new Dog("Tommy");
const cat = new Cat("Kitty");

console.log(dog.makeSound());
console.log(dog);
console.log(cat.makeSound());
console.log(dog.move());
