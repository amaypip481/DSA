function mergeSortRecurrsion(arr){
    if(arr.length === 1) return arr;

    else{
        let arr1 = mergeSortRecurrsion(arr.slice(0,arr.length/2));
        let arr2 = mergeSortRecurrsion(arr.slice(arr.length/2));
        return mergeTwoArray(arr1, arr2);
    }

    

}

function mergeTwoArray(arr1, arr2){
    let i = 0;
    let j = 0;
    let arr = [];
    while(i<arr1.length || j<arr2.length){
        if(j === arr2.length && i != arr1.length) 
        {
            arr.push(arr1[i]);
            i++;
        }
        else if(i === arr1.length && j != arr2.length) 
        {
            arr.push(arr2[j]);
            j++;
        }
        else if(arr1[i]<=arr2[j]) 
            {
                arr.push(arr1[i]);
                i++;
            }
        else if(arr1[i]>arr2[j])
        {
            arr.push(arr2[j]);
            j++;
        }

    }

    return arr;
}

console.log(mergeSortRecurrsion([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSortRecurrsion([105, 79, 100, 110]));