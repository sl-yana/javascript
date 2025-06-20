//Checking if a number is greater than zero and outputting a message accordingly.
let num=prompt("enter number")
if (num > 0) {
  console.log(num, "is greater than 0");
} else {
  console.log(num, "is not greater than 0");
}

//Using the modulo operator (%) to determine if a number is divisible by 2.

if (num % 2 == 0) {
  console.log(num, "is divisilble by 2");
} else {
  console.log(num, "is not divisble by 2");
}

//Comparing two numbers and outputting the larger one.

let num1 = 10;
let num2 = 8;

if (num1 > num2) {
  console.log("num 1 is greater than num2");
} else {
  console.log("num2 is greater than num1");
}

//Assigning letter grades (A, B, C, etc.) based on numerical scores.

let marks = prompt("enter number from 0-100");

if (marks >= 90) {
  console.log("grade A+");
} else if (marks >= 80 && marks <= 89) {
  console.log("grade A");
} else if (marks >= 70 && marks <= 79) {
  console.log("grade B");
} else if (marks >= 60 && marks <= 69) {
  console.log("grade C");
} else {
  console.log("grade D");
}




// 🧠 Data Types - Practical Questions
// Convert String to Number

// Given a value, check if it's an array or not without using Array.isArray().
// Boolean Logic

// Convert these values to boolean and explain the result:
// 0, "false", null, undefined, [], {}

// 🔢 Operators - Practical Questions
// Arithmetic Operator Practice
// Write a program that takes two numbers and returns their:
// sum
// difference
// product
// quotient
// remainder
// Increment/Decrement

let a=10
let b=9


console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);


// Show how +=, -=, *=, /= work with a simple number variable.
// Comparison Operators


let x=10


console.log(x+=7);
console.log(x-=7);
console.log(x*=7);
console.log(x/=7);


// Compare "5" and 5 using == and ===, and explain the result.
// Logical Operators
 let val0 = 5;
 let val1="5"
 


// 🧾 Conditional Statements - Practical Questions
// Even or Odd Checker

if(num%2==0){
  console.log(num, "is even")
}else{
  console.log(num,"is odd")
}


// Write a program that takes a score (0-100) and returns:
// A if 90+
// B if 80-89
// C if 70-79
// D if 60-69
// F otherwise


if(num>=90){
  console.log("A")
}else if (num>=80 && num<=89){
  console.log("B")
}else if (num>=70 && num<=79){
  console.log("C")
}else if (num>=60 && num<=69){
  console.log("D")
}else{
  console.log("F")
}


// Max of Three Numbers
// Write a function to find the largest of three numbers using if-else.

let a1=3847
let a2=83674
let a3=7436556

if (a1>a2 && a1>a3){
  console.log("a1 is greater")
}else if (a2>a1 && a2>a3){
  console.log("a2 is greater")
}else {
  console.log("a3 is greater")
}

// Traffic Light Decision
// Based on the color ("green", "yellow", "red"), return what a car should do ("go", "slow down", "stop").

let color=prompt("enter colour")

if(color=="red"){
  console.log("Stop")
}else if(color=="yellow"){
  console.log("Slow down")
}else if(color=="green"){
  console.log("Go")
}else{
  console.log ("enter color of signal")
}
