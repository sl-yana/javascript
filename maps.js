const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);

const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits1);

fruits1.get("apple")

console.log(fruits1.size);
console.log(fruits1.delete("apples"));
console.log(fruits1);

  console.log(fruits1.clear());
  console.log(fruits1);

  console.log(fruits.has("apples"));

// for each methds 
  let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

console.log(text);

// entries 
let text1 = "";
for (const x of fruits.entries()) {
  text1 += x;
}

console.log(text1);

//keys
let text2=""
for (const x of fruits.keys()) {
  text2 += x;
}

console.log(text2);

// values

let text3 = "";
for (const x of fruits.values()) {
  text3 += x;
}
console.log(text3);

let total = 0;
for (const x of fruits.values()) {
  total += x;
}

console.log(total);

const fruitItem = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}
const result = Map.groupBy(fruitItem, myCallback);

console.log(result);
 

    console.log(5 & 1," and "); // and 

    console.log(5 | 1,"or "); // or 

    console.log(5 ^ 1,"XOR"); // XOR

    console.log(~5,"not"); // not

    console.log(5 << 1,"left shift "); // left shift 

    console.log(5 >> 1,"right shift "); // right shift 
    console.log(-5 >> 1,"right shift "); // right shift 

    console.log(5 >>> 1,"zero-fill right shift "); // zero-fill right shift 
    console.log(-5 >>> 1,"zero-fill right shift "); // zero-fill right shift 