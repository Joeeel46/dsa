
// function validParentheses(str){
//     let stack = []
//     for(let i of str){
//         if(i === '(' || i === '['|| i === '{'){
//             stack.push(i)
//         }else{
//             if(stack.length === 0) return false
//             let top = stack.pop()
//             if(i === ')' && top !== '(' || i === ']' && top !== '[' || i === '}' && top !== '{'){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }

// function validParentheses(str){
//     let stack = []
//     for(let char of str){
//         if(char === '(' || char === '{' || char === '['){
//             stack.push(char)
//         }else{
//             if(stack.length === 0 ) return false
//             let top = stack.pop()
//             if(top !== '(' && char === ')' || top !== '[' && char === ']' || top !== '{' && char === '}') return false
//         }
//     }
//     return stack.length === 0
// }


// let str1 = "{}()[]"
// let str2 = "([[{}])"

// console.log(validParentheses(str1))
// console.log(validParentheses(str2))

//////////////////////////////////////////////////////////////////////////////

// function validParentheses(str) {
//     const stack = [];
//     const bracketMap = { ')': '(', '}': '{', ']': '[' }; 

//     for (let char of str) {
//         if (Object.values(bracketMap).includes(char)) {
//             stack.push(char); 
//         } else if (bracketMap[char]) {
//             if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }



///////O(n) in both the cases

// Test cases
// console.log(validParentheses("(){}[]")); // true
// console.log(validParentheses("({[)]}")); // false
// console.log(validParentheses("{[]}"));   // true
// console.log(validParentheses("{[}]"));   // false

//////////////////////////////////////////////////////////////////////////////

// function charFrequency(str) {
//     const freqMap = new Map();

//     for (let char of str) {
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);
//     }

//     return Object.fromEntries(freqMap); // Convert Map to Object (optional)
// }



///////O(n) both

// // Example usage
// const text = "hello world";
// console.log(charFrequency(text));