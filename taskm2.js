// 1.Filter students who scored more than 75.
// const students = [
//   { name: "Asha", score: 92 },
//   { name: "Ravi", score: 60 },
//   { name: "Simran", score: 78 }
// ];

const students = [
  { name: "yana", score: 92 },
  { name: "moni", score: 60 },
  { name: "himi", score: 78 },
];
const toppers = students.filter((students) => students.score > 75);
console.log(toppers);

// 2.You have a list of expenses. Calculate the total expense.
// const expenses = [
//   { category: "Food", amount: 250 },
//   { category: "Travel", amount: 400 },
//   { category: "Shopping", amount: 150 }
// ];
const expenses = [
  { category: "Food", amount: 250 },
  { category: "Travel", amount: 400 },
  { category: "Shopping", amount: 150 },
];


const total = expenses.reduce((a, b) => a + b.amount,0);
 console.log("Total Expense:", total);

// 3.Capitalize first letter of each name
// const names = ["alice", "bob", "charlie"];
// Transform into ["Alice", "Bob", "Charlie"]
const names = ["yana", "moni", "bony"];

const capitalNames = names.map(
  (names) => names.charAt(0).toUpperCase() + names.slice(1)
);
console.log(capitalNames);

// 4: Extract only email addresses
// const users = [
//   { name: "A", email: "a@example.com" },
//   { name: "B", email: "b@example.com" }
// ];
const users = [
  { name: "A", email: "a@example.com" },
  { name: "B", email: "b@example.com" },
];

const emails = users.map((users) => users.email);
console.log(emails);

// 5.Filter users older than 30
// input const users = [
//   { name: "Raj", age: 28 },
//   { name: "Simran", age: 32 },
//   { name: "Amit", age: 45 }
// ];

const user1 = [
  { name: "yana", age: 28 },
  { name: "moni", age: 32 },
  { name: "himi", age: 45 },
];
const user = user1.filter((user1) => user1.age > 30);
console.log(user);

// 6.Get valid email entries
// const emails = ["test@gmail.com", null, "", "abc@yahoo.com", undefined];
// OP
// ["test@gmail.com", "abc@yahoo.com"]

const emails1 = ["test@gmail.com", null, "", "abc@yahoo.com", undefined];

const validEmails = emails1.filter(emails1 => emails1 && emails1.includes('@'));
console.log(validEmails);
