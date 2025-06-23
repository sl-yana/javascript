// object literals :- It is a list of property names:values inside curly braces{}.
// when you have to reference the same object then use 'this'

let details ={
  fullName:"Yana Shah",
  age:21,
  eyeColor:"brown",
  hairColor:"golden brown"
};
console.log(details)

const mySym=Symbol("key1");
let detail ={
  fullName:"Vandit Thakkar ",
  [mySym]:"mykey1",
  age:28,
  eyeColor:"black",
  hairColor:"black"
};
console.log(detail)
console.log (detail[mySym])
console.log(detail.eyeColor)

detail.eyeColor="blue";
Object.freeze(detail)
detail.eyeColor="green";
console.log(detail.eyeColor)



details.greeting=function(){
  console.log("Hello JS user ")
}

details.greetingTwo=function(){
  console.log(`Hello JS user ${this.fullName}` )
}

console.log(details.greeting());
console.log(details.greetingTwo());

// singleton and with the help of constructor

// const userId = new Object()---> this is singleton object.

const snapchatUser={}

snapchatUser.id="yana-shah";
snapchatUser.name="yana";
snapchatUser.isLoggedIn=true;

console.log(snapchatUser)


const regularUser={
  email:"someone@gmail.com",
  fullName:{
    userFullname:{
          firstName:"vandit",
    lastName:"thakkar"
    }
  }
}
console.log(regularUser.fullName.userFullname.firstName);

// use of assign()--> Its copies properties from a source object to a target object. Syntax: Object.assign(target,source)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3= Object.assign(obj1,obj2) -->method1 

const obj3={...obj1,...obj2} //--> method2
console.log(obj3);
console.log(Object.keys(snapchatUser))
console.log(Object.values(snapchatUser))
console.log(Object.entries(snapchatUser))
// const myObj = Object.fromEntries(snapchatUser);
// console.log(myObj);

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj)
// console.log(Object.getOwnPropertyDescriptor(snapchatUser));

const course={ courseName:"JS Object", price:"999", courseInstructor:"yana shah" } 
const {price}=course
console.log(price);



// protection methods in objects.
