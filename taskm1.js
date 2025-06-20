// 1. Return the first character of the string
// Input: "Hello"
// Expected Output: "H"
let input = "hello";
console.log(input.charAt(0), "1Q");

// 2. Convert a given string to uppercase
// Input: "hello"
// Expected Output: "HELLO"

console.log(input.toUpperCase(), "2Q");

// 3. Check if a string starts with a specific word
// Input: "JavaScript is awesome" — check if it starts with "Java"
// Expected Output: true

let val1 = "Javascript is awesome";
console.log(val1.includes("Java"), "3Q");

// 4. Find the index of the first occurrence of a letter
// Input: "elephant" — find index of "e"
// Expected Output: 0

let val = "elephant";
console.log(val[0], "4Q");

// 5. Replace all spaces with dashes
// Input: "this is a test"
// Expected Output: "this-is-a-test"

let val3 = "this is a test";
console.log(val3.replaceAll(" ", "-"), "5Q");

// 6. Extract a substring from the 2nd to 5th character
// Input: "elephant"
// Expected Output: "leph"

let str = "elephant";
console.log(str.substring(1, 5), "6Q");

// 7. Count how many times a word appears
// Input: "hello world, hello friend" — count "hello"
// Expected Output: 2

let inp3 = "hello world , hello friend ";
let targetWord = "hello";
let count1 = inp3.split(targetWord).length - 1;
console.log(count1, "Q7");

// 8. Trim whitespaces from both ends of a string
// Input: "   padded string   "
// Expected Output: "padded string"

let inp = "  padded string  ";
console.log(inp.trim(), "8Q");

// 9. Reverse a string
// Input: "abcde"
// Expected Output: "edcba"

let alpha = "abcde";
console.log(alpha.split("").reverse().join(""), "Q9");

// 10. Capitalize the first letter of a string
// Input: "good"
// Expected Output: "Good"

console.log(input.replace("h", "H"), "10Q");

// 🧩 Array Method Assignments

// 1. Return the first element of an array
// Input: [10, 20, 30]
// Expected Output: 10

let number = [1, 2, 3];
console.log(number[0], "Q1");

// 2. Add an element to the end of an array
// Input: [1, 2, 3] — add 4
// Expected Output: [1, 2, 3, 4]

console.log(number.push(4), "2Q");
console.log(number, "2Q");

// 3. Remove the last element of an array
// Input: [10, 20, 30]
// Expected Output: [10, 20]

console.log(number.pop(), "3Q");
console.log(number, "3Q");

// 4. Check if a value exists in the array
// Input: [5, 10, 15] — check 10
// Expected Output: true

console.log(number.includes(2), "4Q");

// 5. Return a sorted version of the array
// Input: [3, 1, 2]
// Expected Output: [1, 2, 3]

number.sort((a, b) => a - b);
console.log(number, "Q5");

// 6. Join all elements of an array with -
// Input: ["a", "b", "c"]
// Expected Output: "a-b-c"

let inp1 = ["a", "b", "c"];
console.log(inp1.join("-"), "Q6");

// 7. Filter out values less than 10
// Input: [5, 10, 15, 3, 20]
// Expected Output: [10, 15, 20]

let items = [5, 10, 15, 3, 20];
let Elements = [];
items.forEach((Element) => {
  if (Element >= 10) {
    Elements.push(Element);
  }
});
console.log(Elements, "Q7");

// 8. Multiply each element by 2
// Input: [1, 2, 3]
// Expected Output: [2, 4, 6]
let item = [2, 4, 5, 6];
let ele = [];
item.forEach((Element) => {
  ele.push(Element * 2);
});
console.log(ele, "Q8");

// 9. Find the sum of all array elements
// Input: [2, 4, 6]
// Expected Output: 12

let a = [4, 8, 7, 13, 12];
let sum = 0;

for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum, "Q9");

// 10. Merge two arrays
// Input: [1, 2] and [3, 4]
// Expected Output: [1, 2, 3, 4]

let num1 = [1, 2];
let num2 = [3, 4];

console.log(num1.concat(num2), "10Q");

// Mid Level

// 1. Count how many vowels are in a string
// Input: "Beautiful day"
// Expected Output: 6

const string = "happy birthday";
const vowels = ["a", "e", "i", "o", "u"];
let count = 0;
for (let char of string) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(count, "Q1");

// 2. Check if a string is a palindrome (ignore case and spaces)
// Input: "Was it a car or a cat I saw"
// Expected Output: true
let pal = "Was it a car or a cat I saw";
let rev = pal.split("").reverse().join("");
if (rev == pal) {
  console.log("is palindrome");
} else {
  console.log("is not a palindrome");
}

// 3. Replace each word's first character with *
// Input: "hello world"
// Expected Output: "*ello *orld"
const input9 = "hello world";
let replaceFirstChar = console.log(
  input9
    .split(" ")
    .map((word) => "*" + word.slice(1))
    .join(" ")
);
// 4. Convert a sentence to title case (capitalize each word)
// Input: "welcome to the jungle"
// Expected Output: "Welcome To The Jungle"

let strg = "welcome to the jungle";

let splitStr = strg.split(" ");
for (let i = 0; i < splitStr.length; i++) {
  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
}
console.log(splitStr.join(" "), "Q4");

// 5. Find and return the longest word in a sentence
// Input: "Life is really beautiful sometimes"
// Expected Output: "beautiful"

const statement = "The quick brown fox jumps over the lazy dog";
const words = statement.split(" ");
let longest = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log(longest, "Q5");

// 6. Flatten a nested array (1 level deep)
// Input: [1, 2, [3, 4], 5]
// Expected Output: [1, 2, 3, 4, 5]

// 7. Remove all duplicates from an array
// Input: [1, 2, 2, 3, 4, 4, 5]
// Expected Output: [1, 2, 3, 4, 5]
