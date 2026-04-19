// What is Abstraction in OOP?
// Abstraction is the concept in oop in which we only gives the user what is needed and hide
// the implementation details.

class Rectangle {
  private _size;

  constructor(size: number) {
    this._size = size;
  }

  measure() {
    return this._size + 10;
  }
}

const rec = new Rectangle(10);

console.log(rec.measure());
