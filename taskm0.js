// Practice Questions for Conditional statements  
// Question 1: Age Category Classifier
// Write a program that takes a person's age as input and categorizes them into different age groups:
// Child: 0-12 years
// Teenager: 13-19 years
// Adult: 20-59 years
// Senior: 60+ years
// Input: age = 25 Expected Output: "Adult"
 
let age=25;

if (age<=12){
    console.log("child")
}else if (age<=19 && age>=13){
    console.log("Teenager")
}else if(age<=59 && age>=20){
    console.log("Adult")
}else{
    console.log("Senior")
}

// Question 2: Grade Calculator
// Create a program that converts numerical scores to letter grades:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60
// Input: score = 85Expected Output: "Grade: B"

let score=85;

if (score<=100 && score>=90){
    console.log("Grade:A")
}else if (score<=89 && score>=80){
    console.log("Grade:B")
}else if(score<=79 && score>=70){
    console.log("Grade:C")
}else if(score<=69 && score>=60){
    console.log("Grade:D")
}else {
    console.log("Grade:F")
}
 
// Question 3: Even or Odd Checker
// Write a program that checks if a given number is even or odd.
// Input: number = 17Expected Output: "17 is odd"

let number = 17

if(number%2===0){
    console.log("number is even")
}else {
    console.log("number is odd")
}
 
// Question 4: Simple Calculator
// Create a calculator that performs basic arithmetic operations (+, -, *, /) based on user input.
// Input: num1 = 10, num2 = 5, operator = "*"Expected Output: "Result: 50"
 
let num1 = 10 
let num2 = 5
console.log(num1*num2);

// Question 5: Number Comparison
// Write a program that compares three numbers and finds the largest one.
// Input: a = 15, b = 27, c = 12Expected Output: "The largest number is: 27"
 
let a=15;
let b=27;
let c=12;

if ( a>b && a>c){
    console.log(" a is greater ")
}else if (b>a && b>c ){
    console.log(" b is greater ")
}else { 
    console.log(" c is greater ")
}
 
// Question 6: Password Strength Validator
// Write a program that validates password strength based on these criteria:
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one number
// Contains at least one special character (!@#$%^&*)
// Input: password = "MyPass123!"Expected Output: "Strong password"


let password1= "MyPass123!"
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const number00 = /[0-9]/;
  const specialChar = /[!@#$%^&*]/;

  if (password1.length < 8) {
   console.log("Weak password: Password must contain At least 8 characters long") ;
  }else if (!upperCase.test(password1)) {
    console.log("Weak password: Password must contain at least one uppercase character") ;
  }else if (!lowerCase.test(password1) ){
     console.log("Weak password: Password must contain at least one lowercase character") ;  
    }else  if (!number00.test(password1)) {
 console.log("Weak password: Password must contain at least one number character") ; 
 }else if (!specialChar.test(password1)) {
    console.log("Weak password: Password must contain at least one special character") ;
  }else{console.log("Strong password") 
  };


// Question 7: BMI Calculator with Categories
// Calculate BMI and categorize health status:
// Underweight: BMI < 18.5
// Normal: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30
// Input: weight = 70, height = 1.75 Expected Output: "BMI: 22.86, Category: Normal"


let weight=70;
let height=1.75;
let BMI=(height*height/weight)*703

if(BMI<18.5){
    console.log("Catagory : underweight", BMI)
}else if (BMI<=18.5 && BMI<25){
    console.log("Catagory : normal", BMI)
}else if (BMI<=25 && BMI<30){
    console.log("Catagory : overweight", BMI)
}else{
    console.log("Catagory : Obese", BMI)
}

// Question 8: Traffic Light System
// Simulate a traffic light system that cycles through colors and gives appropriate actions:
// Red: "Stop"
// Yellow: "Caution"
// Green: "Go"
// Input: lightColor = "red"Expected Output: "Action: Stop"
 
let lightColor="red"

if (lightColor==="red"){
    console.log("Action:Stop")
}else if (lightColor==="yellow"){
    console.log("Action:Caution")
}else if(lightColor==="green"){
    console.log("Action:Go")
}else {
    console.log("Enter light color  ")
}


// LOOPS
 
// Question 9: Sum of First N Natural Numbers
// Calculate the sum of first N natural numbers using a loop.
// Input: n = 5Expected Output: "Sum of first 5 natural numbers: 15"
 
let n=5;
let sum=0;
for (let i=0;i<=5;i++){
    sum=sum+n/2
}
console.log (sum)

// Question 10: Factorial Calculator
// Calculate the factorial of a given number using loops.
// Input: number = 5Expected Output: "Factorial of 5 is: 120"
 
let number1=5
for(let i=1;i<5;i++){
   number1*=i
}
console.log(number1);

// Question 13: Multiplication Table
// Print the multiplication table for a given number from 1 to 10.
// Input: number = 7Expected Output:
// 7 x 1 = 77 x 2 = 147 x 3 = 21...7 x 10 = 70

let num=7

for (let i =1; i<=10;i++){
    let newMult=7*i;
    console.log(newMult)
}



// Question 11: Fibonacci Series
// Generate the first N numbers of the Fibonacci series.
// Input: n = 8Expected Output: "Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13"

let numm=8;

const fib=[0,1];
for(let i=2;i<8;i++){
    fib[i]=fib[i-1]+fib[i-2]
}
console.log(fib);

// Question 12: Number Reversal
// Reverse the digits of a given number.
// Input: number = yana Expected Output: "Reversed number: anay"

let numberr=12345
let revNum=0;

while(numberr>0){
    let rev=numberr%10
    numberr=parseInt(numberr/10)
    revNum=revNum*10 + rev

    console.log(rev)
}
console.log(revNum);




