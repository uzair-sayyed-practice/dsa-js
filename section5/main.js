// Naive Solution

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

// Frequency Counter Pattern
// REFACTORED CODE

// const arr1 = [1,3,2];
// const arr2 = [9,1,4];

// function same(arr1, arr2){
//     if (arr1.length!== arr2.length) {
//         return false;
//     }

//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for (let val of arr1) {
//         if (frequencyCounter1[val]) {
//             frequencyCounter1[val] += 1;
//         } else {
//             frequencyCounter1[val] = 1;
//         }
//     }

//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }

//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key ** 2]!== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(same(arr1, arr2))

// function check the first array value present in the second array but squared of it

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let f1 = {};
  let f2 = {};

  for (let val of arr1) {
    f1[val] = (f1[val] || 0) + 1;
  }
  for (let val of arr2) {
    f2[val] = (f2[val] || 0) + 1;
  }

  for (let key in f1) {
    if (!(key ** 2 in f2)) {
      return false;
    }
  }
  return true;
}

const result = same([1, 2, 3, 5], [1, 25, 4, 9]);
console.log(result);
