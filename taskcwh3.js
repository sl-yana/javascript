// what will the following to print in javascript? 
// console.log("har\"".length)

let name = "harry"
console.log("har\"".length);

// it will print the length of the name.


//Explore the includes , startswith and endswith function of a string.

let val="hello world"
console.log(val.includes("world"))
console.log(val.startsWith("world"))
console.log(val.endsWith("hello"))


// Write a program to convert a given string to lowercase.

let user="HELLO"
console.log(user.toLowerCase());

// Extract the amount of string "please give Rs1000".

let str="please give Rs1000";   
let amount= str.slice("please give Rs".length)
console.log(amount);
