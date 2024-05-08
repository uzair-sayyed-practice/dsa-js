// Problem solving approach
// 1. Understand the problem first
// 2. do concrete examples
// 3. Break your problem into smaller
// 4. start solving or simplify it if it is complex
// 5. Look back at your code and refactor it means improve it

// we now have one problem or task to solve
// A function that returns only alphanumeric characters consdering all of them in lowercase so that it not return twice or more times

// Lets write down some approaches format related to this before starting it

// 1. input can be string, special character, can contain spaces, can have uppercase and lowercase both
// 2. What format we should take our input data and in what format we should output the data
// 3. we want output data in specific format whether array or object or direct value
// 4. suppose we want to output object so in that case we will have to assgn value so will assign a value to each element while looping
// 5. we want that value should be 1 iitially and if the lement is already present increase value by

//                      Issues
// . what will be or aprroach to solve this
//first we have to solve unwanted things that special char spaces and uppercase lowercase issue means we dont want that to be consider while outputting
// second how we will assign or implement logic that will add one to the element of our inputs if value is not present and if it is present already then add it by 1
// third we will have to create object first or after
// fourth our input value will be string or not because if user passes number and string both it will create an issue

// function onlyAlphaNumeric(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     let string = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(string)) {
//       if (obj[string] > 0) {
//         obj[string]++;
//       } else {
//         obj[string] = 1;
//       }
//     }
//   }
//   return obj;
// }

// console.log(onlyAlphaNumeric("Hello 234 5 World ^ %"));

// refactoring making more efficient

// function onlyAlphaNumeric(str) {
//   let obj = {};
//   for (let string of str.toLowerCase()) {
//     if (/[a-z0-9]/.test(string)) {
//         obj[string] = ++obj[string] || 1
//     }
//   }
//   return obj;
// }
// console.log(onlyAlphaNumeric("Hello 234 5 World ^ %"));




// Refactoring improving more because expression is expensive to use 

// console.log(charCodeAt(6))

function validateAlphaNumeric(str){
    var charCode = str.charCodeAt();
    if((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)){
        return true;
    }else{
        return false;
    }
}


function onlyAlphaNumeric(str) {
  let obj = {};
  for (let string of str.toLowerCase()) {
    if (validateAlphaNumeric(string)) {
        obj[string] = ++obj[string] || 1
    }
  }
  return obj;
}
console.log(onlyAlphaNumeric("Hello 234 5 World ^ %"));