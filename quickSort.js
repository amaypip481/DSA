function pivotSwap(arr){
    let pivot = arr[Math.round(arr.length/2)];
    let pivotIndex = Math.round(arr.length/2);
    let i = 0;
    let j = 0;
    let pivotCounter = 0;
   for (i=0; i<pivotIndex;)
   {
    if(arr[i]>pivot)
    {
        arr.push(arr[i]);
        arr.splice(i,1);
        pivotIndex--;
    }
    else i++;
   }
   for (j=pivotIndex; j<arr.length; )
    {
     if(arr[j]<pivot)
     {
         arr.unshift(arr[j]);
         arr.splice(j+1,1);
         pivotIndex++;
     }
     else j++;
    }
    // arr.splice(Math.round(arr.length/2),1);
    // arr.splice(i,0,pivot);
  

    return {arr, pivotIndex };
}


let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

function quickSort(arr){
    if(arr.length <= 1) return arr;

    let pivotedArray = pivotSwap(arr);

    return quickSort(pivotedArray.arr.slice(0, pivotedArray.pivotIndex)).concat(quickSort(pivotedArray.arr.slice(pivotedArray.pivotIndex,pivotedArray.length)));
    

}

console.log(quickSort(arr));