// 4 pillars of DOM
// 1) Selection of an element 
// 2)changing HTML 
// 3)changing CSS
// 4)Event Listener

let a = document.querySelector("h1")

a.addEventListener("click",function(){
    a.innerHTML="Hello My name is Yana Shah"
    a.style.color="white"
    a.style.backgroundColor="black"
});


// example of bulb 
let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")
let flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        flag=1
        btn.innerHTML="OFF"
    }else{
       bulb.style.backgroundColor="transparent"
       flag=0
       btn.innerHTML="ON"
    }
})