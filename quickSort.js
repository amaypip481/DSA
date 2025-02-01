function pivotSwap(arr){
    let pivot = arr[Math.round(arr.length/2)];
    let i = 0;
    let j = i+1;
    while(i<arr.length && j<arr.length)
    {
        if(arr[j]<pivot) 
        {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
            j++;            
        }
        else j++;
    }

    arr.splice(Math.round(arr.length/2),1);
    arr.splice(i,0,pivot);
  

    return arr;
}


let arr = [8, 3, 5, 2, 7, 6, 4, 1, 9];

function quickSort(arr){
    if(arr.length === 1) return arr;

    let x = Math.round(arr.length/2);
    let y = Math.round(arr.length);

    quickSort(arr.slice(0, x));
    quickSort(arr.slice(x,y));
    return pivotSwap(arr);
}

console.log(quickSort(arr));