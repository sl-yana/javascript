// DOM Properties & Content.

const myElement = document.getElementById('myParagraph');
myElement.textContent = 'New content for the paragraph!';
myElement.innerHTML = 'Bold new contents';


const h1Elements = document.getElementsByTagName('h1');
        if (h1Elements.length > 0) {
            const firstH1 = h1Elements[0];
            firstH1.textContent = "Text Changed by JavaScript!";
        }

// DOM Tree Navigation
const parentElement = myElement.parentNode;
console.log(parentElement);

const firstChild = parentElement.firstElementChild;
console.log(firstChild);

const nextSibling = parentElement.nextElementSibling;
console.log(nextSibling);

const previousSibling=parentElement.previousSibling
console.log(previousSibling);

const children=parentElement.children;
console.log(children);

const childNodes=parentElement.childNodes;
console.log(childNodes);

// Creating and Manipulation elements 

const newDiv = document.createElement('div');// create new div 
newDiv.textContent = 'This is a new div!'; // add text to new div
document.body.appendChild(newDiv);//add new tag in html file 


// Attributes and Classes 

myElement.setAttribute('data-info', 'important-data');
const dataInfo = myElement.getAttribute('data-info');
console.log(dataInfo);
myElement.classList.add('highlight');
myElement.classList.remove('old-class');
myElement.classList.toggle('active');
const hasClass = myElement.classList.contains('highlight');
console.log(hasClass);


