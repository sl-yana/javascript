const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith"};
console.log(Object.assign(person1, person2));
console.log(Object.entries(person1));


const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];
const myObj = Object.fromEntries(fruits);
console.log(myObj)


const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};
let text = Object.values(person);
console.log(text)
const keys = Object.keys(person);
console.log(keys)


const fruit = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}
const result = Object.groupBy(fruit, myCallback);
console.log(result)