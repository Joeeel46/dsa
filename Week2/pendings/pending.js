///////// find the occurrence of each character in a string using inbuilt hash table(map)

// let str = 'aaaakkeuu'

// function count(str){
//     let hash = new Map()
//     for(let char of str){
//         hash.set(char,(hash.get(char) || 0) + 1)
//     }
//     hash = Object.fromEntries(hash)
//     console.log(hash)
// }

// count(str)


//////////////Remove the duplicate from array in o(n)

// let arr = [1, 2, 1, 1, 4, 2, 3, 3, 5];

// let temp = {};
// let result = [];

// for (let i = 0; i < arr.length;i++) {
//     if (!temp[arr[i]]) {
//         temp[arr[i]] = true;
//         result.push(arr[i]);
//     }
// }

// console.log(result);
