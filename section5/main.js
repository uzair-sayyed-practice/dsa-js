// const arr1 = [1,3,2];
// const arr2 = [9,1, 4];

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//      arr2.splice(correctIndex, 1);
//     }
//     return true;
// }
// console.log(same(arr1, arr2));



// REFACTORED CODE 

const arr1 = [1,3,2];
const arr2 = [9,1,4];

function same(arr1, arr2){
    if (arr1.length!== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        if (frequencyCounter1[val]) {
            frequencyCounter1[val] += 1;
        } else {
            frequencyCounter1[val] = 1; 
        }
    }
    
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2]!== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// console.log(same(arr1, arr2)) 

function sameSqaure( arr1 , arr2){
    if(arr1.length !==  arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1){
        if(frequencyCounter1[val]){
            frequencyCounter1[val] += 1;
        }else{
            frequencyCounter1[val] = 1;
        }
    }
    for (let val of arr2){
        if(frequencyCounter2[val]){
            frequencyCounter2[val] += 1;
        }else{
            frequencyCounter2[val] = 1;
        }
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
};

console.log(sameSqaure(arr1, arr2))