// function twoSum(nums, target) {
//     let numMap = {}
//     for(let i = 0;i < nums.length;i++){
//         let val = target - nums[i]
//         if(val in numMap){
//             return [numMap[val],i] 
//         }
//         numMap[nums[i]] = i
//     }
//     return []
// }
////both O(n)


// const input = [1,2,3,4,5,6,7,8,9,10,11,12]

// const output = []

// for(let i = 2;i < input.length;i+=3){
//     let obj = {
//         a:input[i],
//         b:input[i-1],
//         c:input[i-2],
//         sum:(input[i] + input[i-1] + input[i-2])
//     }
//     output.push(obj)
// }

// console.log(output)


//output
// [{a:3, b:2 , c:1, sum:6}, {a:6, b:5 , c:4, sum:15},{a:9, b:8 , c:7, sum:23},{a:12, b:11 , c:10, sum:33}]