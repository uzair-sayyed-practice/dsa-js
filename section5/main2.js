// Anagrams 
// write a function which take two inout as string compare them and they should be same but the second string will be anagram meaning it will be unsorted like if first string is cinema then the second one could be macine so check both strings and if they are same then return true else false 


// function anagramCompare(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for(let val of str1){
//         frequencyCounter1[val] = (frequencyCounter2[val] || 0 ) + 1
//     }

//     for(let val of str2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
//     }


//     for(let key in frequencyCounter1){
//         if(!(key in frequencyCounter2)){
//             return false;
//         }
//         if(frequencyCounter2[key]!== frequencyCounter1[key]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(anagramCompare('2', '2'))

// another function to perform the same 


// function validAnagram(first,second){
//     if(first.length !== second.length){
//         false;
//     }

//     let lookup ={};

//     for (let i = 0; i < second.length; i++){
//         let letter = second[i];
//         lookup[letter]? lookup[letter] += 1 : lookup[letter] = 1;
//     }


//     for (let i = 0; i < first.length; i++){
//         let letter = first[i];
//         if(!lookup[letter]){
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }

//     return true;
// }

// console.log(validAnagram('anagram', 'nagaram'))






const str1 = "man"
const str2 = "nam"

function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }

    let frequencyCounter1 ={}
    let frequencyCounter2 ={}

    for (let val of str1){
        if(frequencyCounter1[val]){
            frequencyCounter1[val] += 1
        }else {
            frequencyCounter1[val] = 1
        }
    }

    for( let val of str2){
        if(frequencyCounter2[val]){
            frequencyCounter2[val] += 1
        }else{
            frequencyCounter2[val] = 1
        }
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
    }

    return true
}



const result = anagram('', '')
console.log(result)