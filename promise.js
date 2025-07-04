const myPromise = new Promise((resolve,reject)=>{
    const success=true;
    setTimeout(()=>{
        if(success){
            resolve("data is fetched")
        }else{
            reject("failed to fetch the data")
        }
    },2000)
});

myPromise.then((message)=>{
    console.log("success:",message);
})
.catch((error)=>{
    console.error("error",error)
})
.finally(()=>{
    console.log("Promise settled (either fulfilled or rejected).");
});

console.log("promise initiated.");

        