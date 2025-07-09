let img=document.querySelector("#container")
let like=document.querySelector("i")

img.addEventListener("dblclick",function(){
   like.style.transform ="translate(-50%,-50%) scale(1)"
   setTimeout(function(){
    like.style.transform ="translate(-50%,-50%) scale(0)"
},600)
})

