// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(let i = 0;i < arr.length-1;i++){
//             if(arr[i] < arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }

// let arr = [3, 1, 4, 1, 5, 9]
// console.log(bubbleSort(arr))



// function insetionSort(arr){
//     for(let i = 1;i < arr.length;i++){
//         let j = i
//         while(j > 0 && arr[j-1] > arr[j]){
//             [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
//             j--
//         }
//     }
//     return arr
// }

// let arr = [7, -2, 4, -1, 0]
// console.log(insetionSort(arr))


// function quickSort(arr){
//     if(arr.length < 2) return arr
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i = 0;i < arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }


// let arr = ["banana", "apple", "orange", "grape"]
// console.log(quickSort(arr))


// function selectionSort(arr,k){
//     for(let i = 0;i < arr.length-1;i++){
//         let small = i
//         for(let j = i+1;j < arr.length;j++){
//             if(arr[small] > arr[j]) small = j
//         }
//         [arr[small],arr[i]] = [arr[i],arr[small]]
//     }
//     return arr.slice(0,k)
// }

// let arr = [10, 3, 5, 8, 1]
// let k = 3
// console.log(selectionSort(arr,k))



// function mergeSort(arr){
//     if(arr.length < 2) return arr
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(left,right){
//     const sorted = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// let arr1 = [1, 3, 5]
// let arr2 = [2, 4, 6]
// let arr3 = [0, 7, 8]
// console.log(mergeSort([...arr1,...arr2]))


