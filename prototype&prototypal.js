const myArr = [1, 2, 3];
console.log(Object.getPrototypeOf(myArr)); // Array.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myArr))); // Object.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(myArr)))); // null

// prototypal inheritance.

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks.");
  }
};

const rabbit = {
  jumps: true,
  __proto__: animal 
};

rabbit.walk(); 
console.log(rabbit.eats);

