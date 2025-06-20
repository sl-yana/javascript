// 1) Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!.

let age =prompt("enter age ")
age = Number.parseInt(age)
let runAgain=true;
const canDrive=(age)=>{
    age>=18?true:false
}
while(runAgain){

if(canDrive(age)){
    alert("yes you can drive ")
}else{
    alert("you cannot drive")
}
runAgain=confirm("do you want to play again")
}


