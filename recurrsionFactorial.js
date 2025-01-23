function factorialRecurrsive(n){
    console.log("This was printed recursively");
    if(n===0) return;
    if(n===1) return [0];
    if(n===2) return factorialRecurrsive(1).concat([1]);
    
    else 
    {
        let Arr = factorialRecurrsive(n-1);
        return Arr.concat( [Arr[Arr.length-1]+ Arr[[Arr.length-2]]]);
    }
    }

console.log(factorialRecurrsive(9));