// // print from uptodown    O(n)

// function countUpandDown(n){
//     if(n < 1) return
//     console.log(n)
//     countUpandDown(n-1)
//     console.log(n)
// }

// countUpandDown(8)



// // sum     O(log n)
// function sum(n){
//     if(n < 10) return n
//     return (n % 10) + sum(Math.floor(n / 10))
// }

// console.log(sum(5203411))



// // factorial    O(n)
// function factorial(n){
//     if(n === 1) return 1
//     return n * factorial(n - 1)
// }

// console.log(factorial(5))

// //reverse a string     O(n)
// function revString(str){
//     if(str.length === 1) return str
//     return str[str.length - 1] + revString(str.slice(0,-1))
// }

// console.log(revString("hello world"))


//palindrome      O(n)

// function palin(str){      
//     if(str.length === 1 || str.length === 0) return true
//     if(str[0] !== str[str.length - 1]) return false
//     return palin(str.slice(1,-1))
// }

// console.log(palin('aaeeeaa'))

// countdigits      O(log n)
// function countdigits(n){  
//     if(n < 10)return 1
//     return 1 + countdigits(Math.floor(n / 10))
// }

// console.log(count(2342323))

//sum of even number      O(log n)
// function evenSum(n){
//     if(n < 10 && n % 2 === 0) return n
//     if(n < 10 && n % 2 !== 0) return 0
//     let val = n % 10
//     if(val % 2 !== 0) val = 0
//     return val + evenSum(Math.floor(n / 10))
// }

// console.log(evenSum(485672190))

//fibonacci
// function fib(n){    //O(2^n)   space O(n)
//     if(n < 2) return n
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(6))

//binary recurtion      O(log n)
// function recurBinary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,left,right){
//     if(left > right){
//         return -1
//     }
//     let mid = Math.floor((left + right)/2)
//     if(arr[mid] === target){
//         return mid
//     }else if(arr[mid] < target){
//         return search(arr,target,mid+1,right)
//     }else{
//         return search(arr,target,left,mid-1)
//     }
// }
// let a = [1,2,3,4,5,6,7,8,9]

// console.log(recurBinary(a,3))



// recurseFiveTimes       O(1)
// function recurseFiveTimes(count = 1) {     
//     if (count > 5) return; // Base condition to stop recursion

//     console.log(`Recursion call ${count}`);

//     recurseFiveTimes(count + 1); // Recursive call with an incremented count
// }
// // Example Usage:

// recurseFiveTimes();


// function removeCharRecursive(str, charToRemove) {
//     if (str.length === 0) return "";
//     let firstChar = str[0] === charToRemove ? "" : str[0];
//     return firstChar + removeCharRecursive(str.slice(1), charToRemove);
// }

// // // // Example Usage:
// console.log(removeCharRecursive("hello world", "o"));  // Output: "hell wrld"
// console.log(removeCharRecursive("banana", "a"));       // Output: "bnn"
// console.log(removeCharRecursive("123-456-789", "-"));  // Output: "123456789"


// function sumArray(arr,index = 0){
//     if(index === arr.length) return 0
//     return arr[index] + sumArray(arr,index+1)
// }

// function sumArray(arr){
//     if(arr.length === 0) return 0
//     return arr[0] + sumArray(arr.slice(1))
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Output: 15