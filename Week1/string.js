// let str = "Hello World"
// str = str.split(' ')
// let str1 = ''
// for(let j = 0;j < str.length;j++){
//     str1 = ''
//     for(let i = str[j].length-1;i >= 0;i--){
//         str1 += str[j][i]
//     }
//     str[j] = str1
// }

// str = str.join(' ')

// console.log(str)


// function removeChar(str, charToRemove) {
//     return str.split(charToRemove).join(""); 
// }

// // Example Usage:
// console.log(removeChar("hello world", "o"));  // Output: "hell wrld"
// console.log(removeChar("banana", "a"));       // Output: "bnn"
// console.log(removeChar("123-456-789", "-"));  // Output: "123456789"


// function formatSentence(str){
//     if(!str || typeof str !== 'string') return ""
//     str = str.charAt(0).toUpperCase() + str.slice(1)
//     if(!str.endsWith(".")) str+='.'
//     return str
// }




// console.log(formatSentence("hello world")); // Output: "Hello world."
// console.log(formatSentence("This is a test")); // Output: "This is a test."
// console.log(formatSentence("Already correct.")); // Output: "Already correct."
// console.log(formatSentence("")); // Output: ""



// function areAnagrams(string1,string2){
//     if(string1.length !== string2.length) return false
//     let count = {}
//     for(let char of string1){
//         count[char] = (count[char] || 0) + 1
//     }

//     for(let char of string2){
//         if(!count[char]) return false
//         count[char]--
//     }
//     return true
// }

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "ollhe"));   // true
// console.log(areAnagrams("test", "best"));     // false
// console.log(areAnagrams("aabb", "baba"));     // true
// console.log(areAnagrams("rat", "car"));       // false
