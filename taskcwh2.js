//  Write a program to print the marks of a student in an object using for loop.

let marks={
    yana:58,
    aatman:38,
    karan:48,
    jainam:50,
    muntaza: 39
}

for (i=0;i<Object.keys(marks).length;i++){
    console.log(" the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}


// Write the program in Q1 using for in loop.

for ( let key in marks){
    console.log(" the marks of " + key + " are " + marks[key])
}

// Write a program to print "try again" until the user  enters the correct number.

let val  = 7;

while(val != 7){
    prompt("enter number")
}
console.log("you have entered correct number")


// Write a function to find mean of 5 numbers.

const mean=(a,b,c,d) =>{
    console.log(a+b+c+d)
}