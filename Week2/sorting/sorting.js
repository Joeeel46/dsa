/////compares 2 values from the begening and swaps according to it
// function bubbleSort(arr){     // Big O - Worst O(n^2) , Best O(n) , Avg O(n^2)     Space O(1)
//     let swapped
//     do {
//         swapped = false
//         for(let i = 0;i < arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
//                 swapped = true
//             }
//         }
//     } while (swapped);
// }





// const arr = [8, 20, -2, 4, -6]
// bubbleSort(arr)
// console.log(arr)

//////////////////
/////An element is taken from the unsorted part of the array and is compared with the elements in the sorted portion.
//  It is then inserted into its correct position by shifting larger elements to the right. This process is repeated 

// until the entire array is sorted.
// Best O(n)  Worst O(n^2)  Avg O(n^2)        Space  O(1)
// function insertionSort(arr){   
//     for(let i = 1;i < arr.length;i++){
//         let j = i
//         while(j > 0 && arr[j-1] > arr[j]){
//             [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
//             j--
//         }
//     }
//     console.log(arr)
// }

// const arr = [8, 20, -2, 4, -6]
// insertionSort(arr)

////////////////
//Quick Sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array such that elements
// smaller than the pivot go to the left and larger elements go to the right, and then recursively sorts the left and right subarrays.

// function quickSort(arr){      //Best O(n log n) Avg O(n log n) Worst O(n^2)        space worst O(n)  best/avg O(log n)
//     if(arr.length < 2) return arr
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for(let i = 0;i < arr.length -1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }




// const arr = [8, -6, -2, 4, 20]
// console.log(quickSort(arr))

///////////////////////
//Selection Sort is a sorting algorithm that repeatedly finds the minimum element from the unsorted portion and swaps
// it with the first element of the unsorted section. This process is repeated, reducing the unsorted portion until the entire array is sorted.

// function selectionSort(arr){
//     for(let i = 0;i < arr.length -1;i++){
//         let smallest = i
//         for(let j = i + 1;j < arr.length;j++){
//             if(arr[j] < arr[smallest]) smallest = j
//         }
//         [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
//     }
//     console.log(arr)
// }


///O(n^2)   best,avg,worst
//Space O(1)


// const arr = [8, 20, -2, 4, -6]
// selectionSort(arr)

///////////////////////////
//Merge Sort is a divide-and-conquer sorting algorithm that splits the array into two halves, recursively sorts each half,
// and then merges the sorted halves back together. This merging process ensures that the final array is sorted.

//O(n log n) all cases     space O(n)

// function mergeSort(arr){
//     if(arr.length < 2) return arr
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     const sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }


// let arr1 = [1, 3, 5, 6];
// let arr2 = [2, 4, 5, 8];
// console.log(mergeSort([...arr1,...arr2]))


