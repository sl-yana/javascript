// use logical operators to find whether the age of a person lies between 10 and 20.
let age = prompt("enter age");

if (age >= 10 && age <= 20) {
  console.log(age, "lies between 10 and 20");
} else {
  console.log(age, " does not lies between 10 and 20");
}

// demonstrate the use of switch case statements in javascript.

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("Today Is ", day);

// Write a  Javascript program to find  whether a number is divisible by 2 or 3.

let num = prompt("enter number");

if (num % 2 == 0 && num % 3 == 0) {
  console.log(num, "is divisible by 2 and 3");
} else if (num % 2 == 0) {
  console.log(num, "is divisible by 2");
} else if (num % 3 == 0) {
  console.log(num, "is divisible by 3");
} else {
  console.log(num, "is not divisible by 2 and 3");
}

// Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator

let a = age > 18 ? "you can drive" : "you cannot drive";
console.log(a);

