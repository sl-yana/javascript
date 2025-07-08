// example of async function without promise value 

async function myAsync() {
    return "Namaste"    
}
const dataPromise =myAsync()
dataPromise.then((res)=>console.log(res));

// without using await
const promise = new Promise((resolve,reject)=>{
    resolve("Promise Resolved Value!")
});

async function getData() {
    return promise;    
}
const dataP=getData()
dataP.then((result)=>console.log(result));

// using await 
const p = new Promise((resolve,reject)=>{
    resolve("Promise Handled!")
});

async function handlePromise() {
    const val=await p;
    console.log(val);  
}
handlePromise();


// simple execution of promise without async await.

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("promise handled!")
    },2000);
});

function getVal(){
    p1.then((result)=>console.log(result))
    console.log("Namaste JS");
}
getVal();