// synchronous functions:- A callback which is executed immidieatly is called synchronous function.
let a = "Yana";
let b = 21;
let c = "blue";
console.log(
  a + " is " + b + " years old and " + c + " is her favourite colour. "
);

// asynchronous function:- they get executed after sometime has passed , some event has occured or some data has been fetched.
console.log("Start");
setTimeout(function () {
  console.log("Hey I am good");
}, 3000);
console.log("End");

// callback functions:- Any functions that is passed as an argument to another function is called a callback function.

 
function performAction(callback) {
  console.log("Performing some action...");
  callback(); 
}
function afterAction() {
  console.log("Action completed! This message is from the callback.");
}
performAction(afterAction); 