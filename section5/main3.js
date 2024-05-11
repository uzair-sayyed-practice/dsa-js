// Multiper Pointer Pattern 

// Write a function called SumZero which accepts a sorted  list of array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.


const array= [-5,-3,-2,-1,7,8,6];
function SumZero(arr){
    let left = 0;
    let right = arr.length -1;

    while (left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum < 0){
            left++;
        }else{
            right--;
        };
    };
};

console.log(SumZero(array));
