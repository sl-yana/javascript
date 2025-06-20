
// TOPIC-1 :- Basic Console Usage 

// 1) Log your name and favorite hobby to the console.

let myName="yana"
let myHobby="skating"

console.log(myName)
console.log(myHobby)

// 2) Perform and log the result of 45*2-10.

console.log( 45*2-10)

// 3) Use console.log() to display the current year.

const dt=new Date( )
console.log(dt.getFullYear());

// 4) Create two variables for first and last name.  Concatenate and log them.

let firstName="yana"
let lastName="shah"

console.log(firstName+ " " +lastName);


// 5) Track the value of a variable by logging it before and after updating.

let var1=12
console.log(var1);
var1=35;
console.log(var1);

// 6) Use console.error() to simulate an error message.

console.error("hello");

// 7) Log the square of the number 12 to the console. 

let sqr=12

console.log(sqr*12);

// 8) Print the type of the variable holding value true.

let isStudent=true;
console.log(typeof(isStudent));

// 9) Create a variable holding your age and log whether its greater than 18.

let myAge= 21;
if(myAge>18){
    console.log (myAge,"is greater than 18")
}else {
    console.log(myAge,"is smaller than 18 ")
} 

// 10) Log the result of 100/0 and observe the output.

console.log(100/0);

// TOPIC-2 :- Data types and variables.

// 11)  Declare a variable using let and log its value.

let var0=10;
console.log(var0)

// 12) Create a constant to store the value of PI and log it.

const valPi=3.14;
console.log(valPi)

// 13) Reassign a value to a variable declared with let and log the result.

var0=8;
console.log(var0); 

// 14) Check the type of null and log it.

let value=null;
console.log(typeof(value));

// 15) Create a variable with a number as a string and log its type.

let number="45";
console.log(typeof(number));

// 16) Use typeOf to check the type of a boolean variable.

let isBachelor= false;
console.log(typeof(isBachelor));

// 17) Create 3 variables of types string, number and boolean  and log their values.

let name="yana";
let age=21;
let isStudying=true;

console.log(name,age,isStudying);

// 18) Declare a variable without assigning a value .Log its type.

let a;
console.log(typeof(a));

// 19) Create a variable with undefined and log its type.

let vari= undefined;
console.log(typeof(vari)); 

// 20) Use const to create an array.Try reassigning the array and observe the error.

const arr=[1,2,3,4,5];
// arr=[4,5,6,7]; 
console.log(arr);

// TOPIC-3 :- Loops.

// 21)  Write a for loop to print numbers from 1 to 50.

for (i=0;i<50;i++){
    console.log(i);
}

// 22) Use a while loop to sum the numbers from 1 to 10,
let val=1 ;
let sum =0;
while(val<10){
      sum=sum+val;
    val++;
  
}
console.log(sum,"this is ")

// 23) Create a for...of loop to log each character of the string "Javascript".

const val12="Javascript";

for( let char of val12){
    console.log(char);
}

// 24) Write a for loop that skips even numbers between 1 to 20. 

for (let i=0;i<21;i++){
    if(i%2==0){}
    else{
        console.log(i)
    }
}

// 25) Use do while loop  to log numbers from 5 to 1.

let val21=5;
do{
    console.log(val21);
    val21--;
}while(val21>0)

// 26) Create a for loop that calculates the factotial of 5.

let res=5;
for(let i=1;i<5;i++){
    res*=i
}
console.log(res);

// 27) Use a for loop to reverse an array [1,2,3,4].

let str=[1,2,3,4]
for (let i=0;i<1;i++){
    newStr=str.reverse();
    console.log(newStr);
}
