// function closure example

function myCounter() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const add = myCounter();
add();
add();
add();

// funtion currying example

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);

// implicit binding

const person = {
  name: "yana",
  myName: function () {
    console.log(`my name is ${this.name}`);
  },
};
person.myName();

// explicit binding
// call()
const people = { name: "yana" };
function greet(age) {
  console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
}
greet.call(people, 30);

// apply()
const person1 = { name: "Bob" };
function introduce(age, city) {
  console.log(
    `Hello, my name is ${this.name}, I am ${age} years old, and I live in ${city}.`
  );
}
introduce.apply(person1, [25, "New York"]);


// bind()
const car = { brand: 'Toyota' };
function getBrand() {
      console.log(`This car is a ${this.brand}.`);
    }
const boundGetBrand = getBrand.bind(car);
boundGetBrand();