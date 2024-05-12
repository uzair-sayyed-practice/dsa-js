// Count Unique Values in Array 
// means all values should be count only once if it is multiple times meaning if 5 is 5 times in arrray so we have to count it only once 

function countUniqueValues(array){
    if(array.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,2,3,4,5,6,7,8,9,10]));


 
