// function isPower(n){
//     if(n < 1)return "False"
//     while(n > 1){
//         if(n % 2 === 1)return "False"
//         n = n/2
        
//     }
//     return "True"
// }






// function isPowerOfTwoBitwise(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1)) === 0
// }


// console.log(isPowerOfTwoBitwise(1))
// console.log(isPoisPowerOfTwoBitwisewer(2))
// console.log(isPowerOfTwoBitwise(5))



// function fib(n){
//     if(n < 2){
//         return n
//     }
//     return fib(n-1) + fib(n-2)
// }


// console.log(fib(0))
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))


// function recurFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * recurFactorial(n-1)
// }

// console.log(recurFactorial(0))
// console.log(recurFactorial(1))
// console.log(recurFactorial(5))
// console.log(recurFactorial(6))



// function linearSearch(arr,t){
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] === t){
//             return i
//         }
//     }
//     return -1
// }

// let arr1 = [1, 2, 3, 4]
// let arr2 = [4, 5, 3, 6]
// let arr3 = [8, 4, 9, 1]
// let arr4 = [1, 7, 4, 9]


// console.log(linearSearch(arr1,2))
// console.log(linearSearch(arr2,4))
// console.log(linearSearch(arr3,1))
// console.log(linearSearch(arr4,99))



// function binarySearch(arr,target){
//     let rightIndex = arr.length - 1
//     let leftIndex = 0
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// let arr = [-5,2,4,6,10]

// console.log(binarySearch(arr,10))
// console.log(binarySearch(arr,-5))
// console.log(binarySearch(arr,4))
// console.log(binarySearch(arr,9))





// function recurBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex)return -1
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//     if(target == arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex + 1,rightIndex)
//     }
// }

// let arr = [-5,2,4,6,10]

// console.log(recurBinarySearch(arr,2))
// console.log(recurBinarySearch(arr,-5))
// console.log(recurBinarySearch(arr,6))
// console.log(recurBinarySearch(arr,9))


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         node.next = this.head;
//         this.head = node;
//         this.size++;
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(index,value){
//         if(index < 0 || index > this.size){
//             return console.log("Invalid Index")
//         }
//         if(index === 0){
//             return this.prepend(value)
//         }else if(index === this.size){
//             return this.append(value)
//         }else{
//             let node = new Node(value)
//             let prev = this.head
//             for(let i = 0;i < index-1;i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index < 0 || index > this.size){
//             return console.log("Invalid index!")
//         }
//         let removed
//         if(index === 0){
//             removed = this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head
//             for(let i = 0;i < index - 1;i++){
//                 prev = prev.next
//             }
//             removed = prev.next
//             prev.next = removed.next
//         }
//         this.size--
//         return removed.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return console.log("List empty!")
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return value
//         }else{
//             let prev = this.head
//             while(prev.next && prev.next.value != value){
//                 prev = prev.next
//             }
//             if(prev.next){
//                 let remove = prev.next
//                 prev.next = remove.next
//                 this.size--
//                 return remove.value
//             }
//             return null
//         }
       
//     }

//     reverse(){
//         if(this.isEmpty()){
//             return console.log("List is Empty!")
//         }else{
//             let curr = this.head
//             let prev = null
//             while(curr){
//                 let next = curr.next
//                 curr.next = prev
//                 prev = curr
//                 curr = next
//             }
//             this.head = prev
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }else{
//             let i = 0
//             let curr = this.head
//             while(curr){
//                 if(curr.value === value){
//                     return i
//                 }
//                 curr = curr.next
//                 i++
//             }
//             return -1
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty!")
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues+=`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty!")
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }

//     prepend(value){
//         const node = new Node()
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront(){
//         if(this.isEmpty()){
//             return null
//         }
//         let value = this.head.next
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null
//         }else if(this.size === 1){
//             let value = this.head.value
//             this.head = null
//             this.tail = null
//             this.size--
//             return value
//         }

        
//         let curr = this.head

//         while(curr.next !== this.tail){
//             curr = curr.next
//         }

//         let value = this.tail.value

//         this.tail = curr
//         this.tail.next = null
//         this.size--

//         return value

//     }

// }

// const list = new LinkedList()
// // console.log(list.isEmpty())
// // console.log(list.getSize())
// list.append(4)
// list.append(7)
// list.append(3)


// // list.insert(2,1)


// list.print()
// // list.reverse()

// list.print()
// list.removeFromEnd()
// list.print()






class Node{
    constructor(value){
        this.value = null
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.tail = null 
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    

}


const list = 