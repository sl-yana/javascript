// DOM (Document Object Model):- When a webpage is loaded the browser creates a DOM of a page.

// Window Object :- It represents open window in a browser.

let heading=document.getElementById("head");
console.log(heading);

let paragph=document.getElementsByClassName("para");
console.log(paragph);

let head=document.getElementsByTagName("h4");
console.dir(head);

let ele=document.querySelector("p");
console.dir(ele);

let element=document.querySelectorAll("p");
console.dir(element);

let div=document.querySelector("div")
console.dir(div);

const inputElement = document.getElementById("myInput");
inputElement.value = "New default value";
console.log(inputElement.value);

let myElement = document.getElementById("myDiv");
console.log(myElement);
let parent = myElement.parentElement;
console.log(parent);

let firstChild = myElement.firstElementChild;
console.log(firstChild);
let nextSibling = myElement.nextElementSibling;
console.log(nextSibling);

const newDiv = document.createElement("div"); // to make new element
console.log(newDiv);

newDiv.setAttribute("id", "myNewDiv"); // sets the value of an attribute on the specified element.

const divId = newDiv.getAttribute("id"); // to get value
console.log(divId);
newDiv.removeAttribute("id"); // to remove the attribute of an element
newDiv.style.backgroundColor = "lightblue";
newDiv.classList.add("myclass");// to add new class  