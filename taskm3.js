// Practical assignment - Map Filter Reduce Find

// Q1. Double Each Number
// Description: Given an array of numbers, return a new array with each number doubled.
// Input: [1, 2, 3, 4]
// Expected Output: [2, 4, 6, 8]

let val = [1, 2, 3, 4];
let newVal = val.map((x) => {
  return x * 2;
});
console.log(newVal);

// Q2. Extract Usernames
// Description: Given an array of user objects, return an array of usernames.
// Input: [
//   { id: 1, username: "john" },
//   { id: 2, username: "doe" }
// ]
// Expected Output: ['john', 'doe']

const users = [
  { id: 1, username: "john" },
  { id: 2, username: "doe" },
];

const usernames = users.map((user) => user.username);
console.log(usernames);

// Q3. Filter Even Numbers
// Description: Return only even numbers from the array.
// Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [2, 4, 6]

let val1 = [1, 2, 3, 4, 5, 6];
let newArr = val1.filter((x) => {
  return x % 2 == 0;
});
console.log(newArr);

// Q4. Active Users Only
// Description: From an array of user objects, return only the users who are active.
// jsCopyEditInput: [
//   { name: 'A', active: true },
//   { name: 'B', active: false },
//   { name: 'C', active: true }
// ]
// Expected Output:
// jsCopyEdit[
//   { name: 'A', active: true },
//   { name: 'C', active: true }
// ]

const users1 = [
  { name: "A", active: 'test' },
  { name: "B", active: 'test2' },
  { name: "C", active: 'test2' },
];

const activeUsers = users1.filter((user1) => user1.active==='test');
console.log(activeUsers);

// Q5. Words Longer Than 4 Letters
// Description: Return words longer than 4 letters.
// Input: ['cat', 'window', 'sky', 'house']
// Expected Output: ['window', 'house']

const inputWords = ["cat", "window", "sky", "house"];
const outputWords = inputWords.filter((word) => word.length > 4);
console.log(outputWords);

// Q6. Sum of Numbers
// Description: Find the sum of all numbers in an array.
// Input: [1, 2, 3, 4, 5]
// Expected Output: 15

const num = [1, 2, 3, 4, 5];
const outputNum = num.reduce((a, b) => a + b);
console.log(outputNum);

// Q7. Count Occurrences of a Value
// Description: Count how many times the word "apple" appears.
// Input: ['apple', 'banana', 'apple', 'orange', 'apple']
// Expected Output: 3

let arr = ["apple", "banana", "apple", "orange", "apple"];
let count = arr.filter((item) => item === "apple").length;
console.log(count);

// Q8. First Number Greater Than 10
// Description: Find the first number greater than 10.
// Input: [2, 5, 11, 8, 20]
// Expected Output: 11

let numb = [2, 5, 11, 8, 20];
let newNum = numb.filter((a) => {
  return a > 10;
});
console.log(newNum[0]);

// Q9. Find Admin User
// Description: Find the first user with role = 'admin'.
// jsCopyEditInput: [
//   { name: 'John', role: 'user' },
//   { name: 'Jane', role: 'admin' },
//   { name: 'Sam', role: 'user' }
// ]
// Expected Output:
// jsCopyEdit{ name: 'Jane', role: 'admin' }

const user0 = [
  { name: "John", role: "user" },
  { name: "Jane", role: "admin" },
  { name: "Sam", role: "user" },
];

const admin = user0.filter((user) => user.role === "admin");
console.log(admin);

// Q10. Total Price of In-Stock Items
// Description: Find the total price of all in-stock items.
// jsCopyEditInput: [
//   { name: 'Pen', price: 10, inStock: true },
//   { name: 'Book', price: 50, inStock: false },
//   { name: 'Bag', price: 100, inStock: true }
// ]
// Expected Output: 110

// (Explanation: Pen + Bag)

const items = [
  { name: "Pen", price: 10, inStock: true },
  { name: "Book", price: 50, inStock: false },
  { name: "Bag", price: 100, inStock: true },
];
const totalPrice = items
  .filter((item) => item.inStock)
  .reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice);

// Q11. Extract Emails from Verified Users
// Description: Return emails of users who are verified.
// jsCopyEditInput: [
//   { email: 'a@gmail.com', verified: true },
//   { email: 'b@gmail.com', verified: false },
//   { email: 'c@gmail.com', verified: true }
// ]
// Expected Output: ['a@gmail.com', 'c@gmail.com']
const userEmail = [
  { email: "a@gmail.com", verified: true },
  { email: "b@gmail.com", verified: false },
  { email: "c@gmail.com", verified: true },
];

const emails = userEmail
  .filter((item) => item.verified)
  .map((users) => users.email);
console.log(emails);

// Q12. Most Expensive Product Name
// Description: Return the name of the most expensive product.
// jsCopyEditInput: [
//   { name: 'Phone', price: 1000 },
//   { name: 'Laptop', price: 1500 },
//   { name: 'Monitor', price: 800 }
// ]
// Expected Output: 'Laptop'

const products = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 1500 },
  { name: "Monitor", price: 800 },
];


