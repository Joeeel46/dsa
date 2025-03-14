// function areAnagrams(str1,str2){
//     if(str1.length !== str2.length)return false
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }


// console.log(areAnagrams("listen", "silent"))
// console.log(areAnagrams("listen", "sident"))


// let arr = [2,7,4,3,5]
// let large = -Infinity
// let second = -Infinity
// for(let i = 0;i < arr.length;i++){
//     if(arr[i] > large){
//         second = large
//         large = arr[i]
//     }else if(arr[i] > second){
//         second = arr[i]
//     }
// }

// console.log(large)
// console.log(second)


//reverse an array
// function reverse(arr){
//     let right = arr.length-1
//     let left = 0
//     while(left < right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left++
//         right--
//     }
//     return arr
// }
let arr1 = [1,2,3,4,5,6,7,8,9]
console.log(reverse(arr1))



function reverse(arr){
    let left = 0
    let right = arr.length -1
    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        right--
        left++
    }
    return arr
}