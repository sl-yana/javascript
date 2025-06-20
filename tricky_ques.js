// 0) Convert the following function into an arrow function.
// Input:
// function add(a, b) {
//   return a + b;
// }

function test(a,b,d){
    const c = a+b;
    return c
}

const ab=(a,b,d)=>{
    return a*b*c
}



const dc = test(2,4)
// 1) Print each element of this array.
// Input:
// ["apple", "banana", "mango"]

const foodItem = ["apple", "banana", "mango"];
const newFood = foodItem.forEach((ele) => {
  console.log(ele, "1");
});

// 2) Create a new array with each number doubled.
// Input:
// [1, 2, 3, 4]
// Expected Output:
// [2, 4, 6, 8]

let numbers = [1, 2, 3, 4];
const newNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(newNumbers, "2");

// 3) Return all numbers greater than 10.
// Input:
// [5, 12, 8, 130, 44]
// Expected Output:
// [12, 130, 44]

const numbValue = [5, 12, 8, 130, 44];
const newNumbValue = numbValue.filter((x) => {
  return x > 10;
});
console.log(newNumbValue, "3");

// 4) Calculate the sum of all numbers in the array.
// Input:
// [1, 2, 3, 4]
// Expected Output:
// 10

const newSum = numbers.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
});

console.log(newSum, "4");

// 5) Find the first number greater than 10.
// Input:
// [2, 8, 15, 6]
// Expected Output:
// 15

const itemValue=[2,8,15,6]
const greaterVal=itemValue.find((val)=>val>10)
console.log(greaterVal,"5");

// 6) Find the index of the first even number.
// Input:
// [1, 3, 5, 4, 2]
// Expected Output:
// 3
const itemVal=[1,3,5,4,2];
const indVal=itemVal.findIndex((item)=>item%2===0)
console.log(indVal,"6");

// 7) Find the index of "apple".
// Input:
// ["banana", "apple", "mango"]
// Expected Output:
// 1
const variety = ["banana", "apple", "mango"];
const idxVal = variety.indexOf("apple");
console.log(idxVal, "7");

// 8) Find the last index of "apple".
// Input:
// ["apple", "banana", "apple"]
// Expected Output:
// 2

const idx1 = variety.lastIndexOf("mango");
console.log(idx1, "8");

// 9) Check if there is at least one even number.
// Input:
// [1, 3, 5, 7]
// Expected Output:
// false

const values=[1,3,5,7]
const valEven=values.every((val)=>val%2===0)
console.log(valEven,'9')

// 10) Check if all numbers are positive.
// Input:
// [1, 2, 3, 4]
// Expected Output:
// true

const nums=[1,2,3,4]
const newNums=nums.every((Element)=>Element>0)
console.log(newNums,"10")

// 11) Check if "mango" is in the array.
// Input:
// ["apple", "banana", "mango"]
// Expected Output:
// true

const fruitVal = ["apple", "banana", "mango"];
const hasMango = fruitVal.some((item) => item === "mango");
console.log(hasMango, "11");

// 12) Add "grape" to the end of the array.
// Input:
// ["apple", "banana"]
// Expected Output:
// ["apple", "banana", "grape"]

const fruits = ["apple", "banana"];
fruits.push("grape");
console.log(fruits, "12");

// 13)  Remove the last element from the array.
// Input:
// ["apple", "banana", "grape"]
// Expected Output:
// ["apple", "banana"]

fruits.pop();
console.log(fruits, "13");

// 14) Remove the first element from the array.
// Input:
// ["apple", "banana", "grape"]
// Expected Output:
// ["banana", "grape"]

const fruit = ["apple", "banana", "grape"];
fruit.shift();
console.log(fruit, "14");

// 15) Add "mango" to the beginning of the array.
// Input:
// ["apple", "banana"]
// Expected Output:
// ["mango", "apple", "banana"]

fruit.unshift("mango");
console.log(fruit, "15");

// 16) Convert the array to a string.
// Input:
// ["apple", "banana", "mango"]
// Expected Output:
// "apple,banana,mango"

const items = ["apple", "banana", "mango"];
const newItem = items.toString();
console.log(newItem, "16");

// 17) Join array elements with a dash -.
// Input:
// ["apple", "banana", "mango"]
// Expected Output:
// "apple-banana-mango"

const joinedItem = items.join("-");
console.log(joinedItem, "17");

// 18) Fill array with 0 from index 1 to 3.
// Input:
// [1, 2, 3, 4, 5]
// Expected Output:
// [1, 0, 0, 4, 5]

let number = [1, 2, 3, 4, 5];
const newNumber = number.fill(0, 1, 3);
console.log(newNumber, "18");

// 19) Copy first two elements to the end.
// Input:
// [1, 2, 3, 4, 5]
// Expected Output:
// [1, 2, 3, 1, 2]

const repNum = number.copyWithin(3);
console.log(repNum, "19");

// 20) Extract elements from index 1 to 3.
// Input:
// ["apple", "banana", "mango", "grape"]
// Expected Output:
// ["banana", "mango"]

const newFruits = ["apple", "banana", "mango", "grape"];
const sliceFruits = newFruits.slice(1, 3);
console.log(sliceFruits, "20");

// 21) Remove 2 elements from index 1 and insert "kiwi".
// Input:
// ["apple", "banana", "mango", "grape"]
// Expected Output:
// ["apple", "kiwi", "grape"]

const food = ["apple", "banana", "mango", "grape"];
food.splice(1, 1, "kiwi");
console.log(food, "21");

// 22)Sort numbers in ascending order.
// Input:
// [4, 2, 7, 1]
// Expected Output:
// [1, 2, 4, 7]

let valueNum = [4, 2, 7, 1];
const assVal = valueNum.sort();
console.log(assVal, "22");

// 23) Reverse the array.
// Input:
// [1, 2, 3]
// Expected Output:
// [3, 2, 1]

const input = [1, 2, 3];
const newInput = input.reverse();
console.log(newInput, "23");

// 24) Create an array from the string.
// Input:
// "hello"
// Expected Output:
// ["h", "e", "l", "l", "o"]


let str = "hello";
let newStr = Array.from(str);
console.log(newStr,"24");


// 25) Check if a value is an array.
// Input:
// [1, 2, 3]
// Expected Output:
// true

const arr = [1, 2, 3];
console.log(Array.isArray(arr), "25");

// 26) Use valueOf() on an array.
// Input:
// [1, 2, 3]
// Expected Output:
// [1, 2, 3]

const arry = [1, 2, 3];
const verifyArr = arry.valueOf();
console.log(verifyArr, "26");

// 27) Get key-value pairs of an array.
// Input:
// ["a", "b", "c"]

const array = ["a", "b", "c"];
const ar = array.entries();
for (let item of ar ){
    console.log(item,"27");
}

// 28) Get all indexes of an array.
// Input:
// ["x", "y", "z"]
// Expected Output:
// [0, 1, 2]

let valNumb=["x","y","z"]
let valKey=valNumb.keys()
for(key of valKey){
    console.log(key,"28") ;
}

// 29) Get all values of an array.
// Input:
// ["a", "b"]
// Expected Output:
// ["a", "b"]

let arrr=["a","b"]
console.log(arrr,"29");

// 30) Concatenate all strings in reverse order.
// Input:
// ["a", "b", "c"]
// Expected Output:
// "cba"

const value0 = ["a", "b", "c"];
const concateVal = value0.concat().reverse();
const strVal = concateVal.toString();
console.log(strVal, "30");

// 31) Flatten a single level nested array.
// Input:
// [1, 2, [3, 4]]
// Expected Output:
// [1, 2, 3, 4]

const num = [1, 2, [3, 4]];
const flatNum = num.flat();
console.log(flatNum, "31");

// 32) Duplicate each number and return a flat array.
// Input:
// [1, 2, 3]
// Expected Output:
// [1, 1, 2, 2, 3, 3]

const numeric=[1,2,3]
const arr2 = numeric.map((el)=>[el,el])
console.log(arr2.flat())
