// Create an array of numters and take input from the user to add numbers to this array

let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = prompt("enter number ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Keep adding numbers to the array in 1 until 0 is added to the array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]; 
let a1;
do {
  a1 = prompt("enter number ");
  a1 = Number.parseInt(a1);
  arr.push(a1);

}while((a1 != 0) )
  console.log(arr1); 
// filter for numbers divisible by 10 from a given array
let arr2 = [1, 2, 3, 40, 50, 6, 7, 830];
let newArr=arr2.filter ((x)=>{
    return x%10==0
})
console.log(newArr);

// Create an array of square of given numbers
let arr3 = [1, 2, 3, 40, 50, 6, 7, 830];
let newArr1=arr3.map ((x)=>{
    return x*x
})
console.log(newArr1);
// Use reduce to catulate factorial of a given number from an array of first n  natural numbers (n being the number  whose factorial needs to be calculated
let arr4= [1, 2, 3, 4];
let newArr2=arr4.reduce ((x1,x2)=>{
    return x1*x2
})
console.log(newArr2);