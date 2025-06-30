const letters=new Set(["a","b","c"])

letters.add("d")
console.log(letters);

answer=letters.has("e")
console.log(answer);


let text="";
letters.forEach(function(value){
    text += value;
})
console.log(text);

const myIterator=letters.values()
let text1="";
for(const entry of myIterator ){
    text1 += entry;
}
console.log(text1);

const inputs = new Set(["a","b"])

let item="";
for(const x of inputs.keys()){
    item +=x
}

console.log(item);


for (const value of letters.entries()) {
  text += value;
}

console.log(text);