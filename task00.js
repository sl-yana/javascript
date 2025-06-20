const arr = [1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6];

// const freqCounter = arr.reduce(
//   (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
//   {}
// );

const freqCounter = arr.reduce((counter,item)=>{
    if(counter[item])
    {
        counter[item]+=1;
    }
    else{
        counter[item]=1;
    }
    return counter;
},{})

console.log(arr)
console.log(freqCounter);
