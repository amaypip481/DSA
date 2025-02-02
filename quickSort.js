function pivotSwap(arr){
    let pivot = arr[Math.round(arr.length/2)];
    let i = 0;
    let j = 0;
    while(i<arr.length && j<arr.length)
    {
        
        if(arr[j]>pivot && arr.indexOf(pivot)>j) 
        {
            arr.push(arr[j]);
            arr.splice(j,1);         
        }
        else if(arr[j]>pivot && arr.indexOf(pivot)<j) 
            {
                j++;        
            }
        else if(arr[j]<pivot)
        {
            arr.unshift(arr[j]);
            arr.splice(j+1,1);
            i++;
            j++;
        }
        else j++;
    }

    // arr.splice(Math.round(arr.length/2),1);
    // arr.splice(i,0,pivot);
  

    return {arr, i};
}


let arr = [8, 3, 5, 2, 7, 6, 4, 1, 9];

function quickSort(arr){
    if(arr.length <= 1) return arr;

    let pivotedArray = pivotSwap(arr);

    return quickSort(pivotedArray.arr.slice(0, pivotedArray.i)).concat(quickSort(pivotedArray.arr.slice(pivotedArray.i,pivotedArray.length)));
    

}

console.log(quickSort(arr));