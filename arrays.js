// ARRAYS AND ARRAYS METHODS //

const details=["yana",21,"skating", true]
console.log(details);


let marks_class_12=[1,5,7,8,9,false,"not present"]

marks_class_12[7]=76
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])

console.log(typeof marks_class_12)  

// Basic Array Methods 

// Array length :-	Returns the length (size) of an array
console.log(marks_class_12.length)

// Array toString()	:- Converts an array to a comma separated string of values
let n=[1,2,3,4]
console.log(n.toString())

// Array at():- Returns an indexed element from an array
console.log(n.at(3))

// Array join():-	Joins all array elements into a string
console.log(n.join("-"))

// Array pop() :-	Removes the last element from an array
console.log(n.pop())

// Array push():-	Adds a new element to an array
console.log(n.push(9))

// Array shift() :-	Removes the first array element
console.log(n.shift())

// Array unshift() :-	Adds a new element at the beginning of an array
console.log(n.unshift(3))

// Array delete() :-	Creates undefined holes in the array
delete n[1] 
console.log(n)

// Array concat() :-	Creates a new array by merging existing arrays
let n1=[5,6,7,8]
let n2=[9,0]
let con=console.log(n.concat(n1,n2))

// Array copyWithin() :-	Copies array elements to another position in the array
n.copyWithin(2, 0);
console.log(n)

// Array flat() :-	Creates a new array from sub-array elements

// Array slice():-Slices out a part of an array
let newNum=n.slice(2,4 )
console.log(newNum)

// Array splice() :- Adds new items to an array
n.splice(2,3,103,489,588)
console.log(n);

// Array toSpliced() :-	Adds new items to an array in a new array
n.toSpliced(2)
console.log (n)


// Array Search Methods 

// Array indexOf():-	Returns the first position of an element value

// Array lastIndexOf():- Returns the last position of an element value

// Array includes() :-	Returns true if an element value is present in an array

// Array find():- Returns the value of the first element that passes a test

// Array findIndex() :-	Returns the index of the first element that passes a test

// Array findLast():- Returns the value of the last element that passes a test

// Array findLastIndex() :-	Returns the index of the last element that passes a test



//  Array Sort Method

// Alphabetic Sort

// Array sort()
let num=[551,34,56,14,77,90,89]
num.sort()
console.log(num);

// Array reverse()
num.reverse()
console.log(num);

// Array toSorted()
num.toSorted()
console.log(num)

// Array toReversed()
num.toReversed()
console.log(num);

// Sorting Objects

// Numeric Sort

// Numeric Sort
let number =[1,3,2,4,6,7,10,8,5,9]
number.sort((a,b)=> a-b)
console.log(number)

// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()


let x=10;
let y=8;
let z=6;

let minimum;
let maximum;

x1=Math.round(x);
console.log(x1)
// x1=Math.floor(x);
// console.log(x1)
// x1=Math.ceil(x);
// console.log(x1)
// x1=Math.pow(x);
// console.log(x1)
// x=Math.sqrt(x);
// x=Math.abs(x);
maximum=Math.max(x,y,z);
minimum=Math.min (x,y,z);

console.log(minimum)
console.log(maximum)



// Array Iteration methods 
// Array forEach :-	Calls a function for each array element

let numb=[3,5,1,2,4]
numb.forEach((Element)=>{
    console.log(Element*Element)
})


for (let i=0;i<numb.length;i++){
    console.log(numb[i])
}
// Array map() :-	Creates a new array by performing a function on each element
let ar=[45,23,21]
ar.map((value)=>{
    console.log(value)
})
// Array flatMap() :-	Creates a new array by mapping and flattening all elements
// Array filter():-	Creates a new array with all elements that pass a test
// Array reduce():-	Runs a function on each element to produce a single value
// Array reduceRight():-	Runs a function on each element to produce a single value
// Array every():-	Returns true if every elements pass a test
// Array some():-	Returns true if some elements pass a test
// Array from():-	Returns an array object from an iterable object
let name="yana"
let arr=Array.from(name)
console.log(arr);

// Array keys():-	Returns an array with the keys of an array
// Array entries():-	Returns an array with the entries of an array
// Array with():-	Update elements without altering the original array
// Array Spread (...):-	Expands an array into individual elements
// Array Rest (...):- Destruct an array and collect the leftovers

// for of with array 
for(let i of numb){
    console.log(i);
}



// for in with array 
for(let i in numb){
    console.log(i)
}