// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(avg);

// let items = [250, 645, 300, 900, 50];
// let idx = 0;
// for (let el of items) {
//   let offer = el / 10;
//   items[idx] = items[idx] - offer;
//   console.log(items[idx]);
//   idx++;
// }

// let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

// console.log(companies.shift());

// console.log(companies.splice(2, 1, "ola"));
// console.log(companies);
// console.log(companies.push("amazon"));
// console.log(companies);

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("hello world");


// const countVow=(str)=>{
//     let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVow("hello world");


// let num=[2,3,4,5,6];

// let calcSqr=(num)=>{
//     console.log(num*num)
// }
// num.forEach(calcSqr)




// let score=[97,89,91,56,99,64,49];

// let topper=marks.filter((num)=>{
//     return num>90;
// })
// console.log(topper);


// let n=prompt("enter number")

// let arr=[];

// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)

// let sum1=arr.reduce((res,curr)=>{
//     return res + curr;
// })

// console.log(sum1);

// let fact=arr.reduce((res,curr)=>{
//     return res * curr
// })
// console.log(fact);





// let h2=document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText=h2.innerText + " from apna college ";

// console.log(h2.innerText)


// let divs=document.querySelectorAll(".box");
// console.log(divs)

// divs[0].innerText="new unique 1"
// divs[1].innerText="new unique 2"
// divs[2].innerText="new unique 3"


let btn=document.createElement("button")
btn.innerText="click me!"
btn.style.backgroundColor="red"
btn.style.color="white"
document.querySelector("body").prepend(btn)