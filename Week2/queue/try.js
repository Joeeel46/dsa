// class CircularQueue{
//   constructor(size){
//     this.items = new Array(size)
//     this.capacity = size
//     this.length = 0
//     this.front = -1
//     this.rear = -1
//   }

//   isFull(){
//     return this.length === this.capacity
//   }

//   isEmpty(){
//     return this.length === 0
//   }

//   enqueue(value){
//     if(!this.isFull()){
//       this.rear = (this.rear + 1) % this.capacity
//       this.items[this.rear] = value
//       this.length += 1
//       if(this.front === -1) {
//         this.front = this.rear
//       }
//     }else{
//       console.log("Queue full")
//       return
//     }
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log("Queue Empty")
//       return
//     }else{
//       const value = this.items[this.front]
//       this.items[this.front] = null
//       this.front = (this.front + 1) % this.capacity
//       this.length -= 1
//       if(this.isEmpty()){
//         this.rear = -1
//         this.front = -1
//       }
//       return value
//     }
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log("Queue empty")
//       return
//     }
//     return this.items[this.front]
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("Queue empty")
//       return
//     }else{
//       let result = []
//       let i = this.front
//       do {
//         result.push(this.items[i])
//         i = (i + 1) % this.capacity
//       } while (i !== (this.rear + 1) % this.capacity);

//       console.log(result.join(' '))
//     }
//   }
// }




// const queue = new CircularQueue(5)
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

// queue.print()




// class QueueStack{
//   constructor(){
//     this.stack1 = []
//     this.stack2 = []
//   }

//   isEmpty(){
//     return this.stack1.length === 0 && this.stack2.length === 0
//   }

//   enqueue(value){
//     return this.stack1.push(value)
//   }

//   dequeue(){
//     if(this.stack2.length === 0){
//       if(this.stack1.length === 0){
//         return null
//       }
//       while(this.stack1.length > 0){
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }

//   peek(){
//     if(this.stack2.length > 0){
//       return this.stack2[this.stack2.length-1]
//     }
//     if(this.stack1.length > 0){
//       return this.stack1[0]
//     }
//     return 'empty'
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log("Empty")
//       return
//     }
//     let result = []
//     for(let i = this.stack2.length-1;i >= 0;i--){
//       result.push(this.stack2[i])
//     }
//     for(let i = 0;i < this.stack1.length;i++){
//       result.push(this.stack1[i])
//     }
//     console.log(result.join(' -> '))
//   }
// }


// const queue = new QueueStack()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.display()
// queue.dequeue(40)
// queue.display()
// console.log(queue.peek())



// class Queue{
//   constructor(){
//     this.items = []
//   }

//   isEmpty(){
//     return this.items.length === 0
//   }

//   enqueue(value){
//     return this.items.push(value)
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log('Empty')
//     }else{
//       return this.items.shift()
//     }
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log('empty')
//       return
//     }
//     return this.items[0]
//   }

//   getsize(){
//     return this.items.length
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log('empty')
//       return
//     }
//     console.log(this.items.join(' '))
//   }
// }



// class QueueStack{
//   constructor(){
//     this.stack1 = [] //enq
//     this.stack2 = [] //deq
//   }

//   isEmpty(){
//     return this.stack1.length === this.stack2.length
//   }

//   enqueue(value){
//     return this.stack1.push(value)
//   }

//   dequeue(){
//     if(this.stack2.length === 0){
//       if(this.stack1.length === 0){
//         return 'Stack empty!'
//       }
//       while(this.stack1.length !== 0){
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }

//   peek(){
//     if(this.stack1.length > 0){
//       return this.stack1[0]
//     }
//     if(this.stack2.length > 0){
//       return this.stack2[this.stack2.length-1]
//     }
//     return "Stack Empty!"
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log("Stack Empty")
//       return
//     }
//     let result = []
//     for(let i = this.stack2.length-1;i >= 0;i--){
//       result.push(this.stack2[i])
//     }
//     for(let i = 0;i < this.stack1.length;i++){
//       result.push(this.stack1[i])
//     }
//     console.log(result.join(' -> '))
//   }
// }



// let queue = new QueueStack()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.display()
// queue.dequeue(40)
// queue.display()
// console.log(queue.peek())


// class CircularQueue{
//   constructor(size){
//     this.queue = new Array(size)
//     this.capacity = size
//     this.length = 0
//     this.front = -1
//     this.rear = -1
//   }

//   isEmpty(){
//     return this.front === this.rear
//   }

//   isFull(){
//     return this.length === this.capacity
//   }

//   enqueue(value){
//     if(this.isFull()){
//       console.log("Queue full!")
//       return
//     }
//     this.rear = (this.rear + 1) % this.capacity
//     this.queue[this.rear] = value
//     this.length += 1
//     if(this.front === -1) this.front = this.rear
//     return value
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log('Queue Empty!')
//       return
//     }
//     const value = this.queue[this.front]
//     this.queue[this.front] = null
//     this.front = (this.front + 1) % this.capacity
//     this.length -= 1
//     if(this.isEmpty()){
//       this.front = -1
//       this.rear = -1
//     }
//     return value
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log('Queue Empty!')
//       return
//     }
//     return this.queue[this.front]
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log('Queue Empty!')
//       return
//     }
//     let result = []
//     let i = this.front
//     do {
//       result.push(this.queue[i])
//       i = (i + 1) % this.capacity
//     } while (i !== (this.rear + 1) % this.capacity);
//     console.log(result.join(' '))
//   }
// }


// const queue = new CircularQueue(5)
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

// queue.print()

// queue.enqueue(60)
// queue.print()                                         

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class QueueLinkedList{
//   constructor(){
//     this.front = null
//     this.rear = null
//     this.size = 0
//   }

//   getSize(){
//     return this.size
//   }

//   isEmpty(){
//     return this.size === 0
//   }

//   enqueue(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//       this.front = node
//       this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//     this.size++
//     return value
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log('queue empty')
//       return
//     }
//     this.size--
//     return this.front = this.front.next
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log('queue empty')
//       return
//     }
//     return this.front.value
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log('queue empty')
//       return
//     }
//     let str = ''
//     let curr = this.front
//     while(curr){
//       str += `${curr.value} `
//       curr = curr.next
//     }
//     return str.trim()
//   }
// }




// const queue = new QueueLinkedList()
// // console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// // console.log(queue.isEmpty())
// console.log(queue.getSize())
// console.log(queue.display())
// queue.dequeue(20)
// // console.log(queue.print())
// console.log(queue.peek())
// console.log(queue.display())


// class QueueStack{
//   constructor(){
//     this.stack1 = []
//     this.stack2 = []
//   }

//   isEmpty(){
//     return this.stack1.length === 0 && this.stack2.length === 0
//   }

//   enqueue(value){
//     return this.stack1.push(value)
//   }

//   dequeue(){
//     if(this.stack2.length === 0){
//       if(this.stack1.length === 0){
//         return 'queueu empty'
//       }
//       while(this.stack1.length > 0){
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }

//   peek(){
//     if(this.stack1.length > 0){
//       return this.stack1[0]
//     }
//     if(this.stack2.length > 0){
//       return this.stack2[this.stack2.length-1]
//     }
//     return 'queue empty'
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log('empty')
//       return
//     }
//     let result = []
//     for(let i = this.stack2.length-1;i >= 0;i--){
//       result.push(this.stack2[i])
//     }
//     for(let i = 0;i < this.stack1.length;i++){
//       result.push(this.stack1[i])
//     }
//     console.log(result.join(' '))
//   }
// }

// let queue = new QueueStack()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.display()
// queue.dequeue(40)
// queue.display()
// console.log(queue.peek())




// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class queueLinkedList{
//   constructor(){
//     this.front = null
//     this.rear = null
//     this.size = 0
//   }

//   isEmpty(){
//     return this.size === 0
//   }

//   getSize(){
//     return this.size
//   }

//   enqueue(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//       this.front = node
//       this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//     this.size++
//     return value
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log('queue emptyu')
//       return
//     }
//     const value = this.front.value
//     this.front = this.front.next
//     if(!this.front) this.rear = null
//     return value
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log('queue emptyu')
//       return
//     }
//     return this.front.value
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log('queue emptyu')
//       return
//     }
//     let str = ''
//     let curr = this.front
//     while(curr){
//       str += `${curr.value} `
//       curr = curr.next
//     }
//     return str.trim()
//   }
// }


// const queue = new queueLinkedList()
// // console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// // console.log(queue.isEmpty())
// console.log(queue.getSize())
// console.log(queue.display())
// queue.dequeue(20)
// // console.log(queue.print())
// console.log(queue.peek())
// console.log(queue.display())

// class CircularQueue{
//   constructor(size){
//     this.queue = new Array(size)
//     this.size = size
//     this.length = 0
//     this.front = -1
//     this.rear = -1
//   }

//   isEmpty(){
//     return this.length === 0
//   }

//   peek(){
//     if(this.isEmpty()){
//       return 'empty queue'
//     }
//     return this.queue[this.front]
//   }

//   isFull(){
//     return this.length === this.size
//   }

//   enqueue(value){
//     if(this.isFull()){
//       return 'full queue'
//     }
//     this.rear = (this.rear + 1) % this.size
//     this.queue[this.rear] = value
//     this.length += 1
//     if(this.front === -1) this.front = this.rear
//     return value
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       return 'empty queue'
//     }
//     const value = this.queue[this.front]
//     this.queue[this.front] = null
//     this.front = (this.front + 1) % this.size
//     this.length -= 1
//     if(this.isEmpty()){
//       this.front = -1
//       this.rear = -1
//     }
//     return value
//   }

//   print(){
//     if(this.isEmpty()){
//       return 'empty queue'
//     }
//     let i = this.front
//     let result = []
//     do {
//       result.push(this.queue[i])
//       i = (i + 1) % this.size
//     } while (i !== (this.rear + 1) % this.size);
//     console.log(result.join(' '))
//   }
// }


// const queue = new CircularQueue(5)
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

// queue.print()

// queue.enqueue(60)
// queue.print()


// class Queue{
//   constructor(){
//     this.queue = []
//   }

//   isEmpty(){
//     return this.queue.length === 0
//   }

//   enqueue(value){
//     return this.queue.push(value)
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log("empty queue")
//       return
//     }
//     return this.queue.shift()
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log("empty queue")
//       return
//     }
//     return this.queue[0]
//   }

//   size(){
//     return this.queue.length
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("empty queue")
//       return
//     }
//     let str = ''
//     for(let i = 0;i < this.queue.length;i++){
//       str += `${this.queue[i]} `
//     }
//     return str.trim()
//   }
// }

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(6)
// queue.enqueue(8)
// console.log(queue.dequeue())      
// console.log(queue.size())      
// console.log(queue.peek())      
// console.log(queue.print())


// class QueueStack{
//   constructor(){
//     this.stack1 = []
//     this.stack2 = []
//   }

//   isEmpty(){
//     return this.stack1.length === 0 && this.stack2.length === 0
//   }

//   enqueue(value){
//     return this.stack1.push(value)
//   }

//   dequeue(){
//     if(this.stack2.length === 0){
//       if(this.stack1.length === 0){
//         return 'empty queue'
//       }
//       while(this.stack1.length > 0){
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }

//   peek(){
//     if(this.stack2.length > 0){
//       return this.stack2[this.stack2.length-1]
//     }
//     if(this.stack1.length > 0){
//       return this.stack1[0]
//     }
//     return 'queue empty'
//   }

//   display(){
//     if(this.isEmpty()){
//       console.log('queue empty')
//       return
//     }
//     let result = []
//     for(let i = this.stack2.length-1;i >= 0;i--){
//       result.push(this.stack2[i])
//     }
//     for(let i = 0;i < this.stack1.length;i++){
//       result.push(this.stack1[i])
//     }
//     console.log(result.join(' '))
//   }
// }

// let queue = new QueueStack()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.display()
// queue.dequeue(40)
// queue.display()
// console.log(queue.peek())



// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class QueueLL{
//   constructor(){
//     this.front = null
//     this.rear = null
//     this.size = 0
//   }

//   isEmpty(){
//     return this.size === 0
//   }

//   peek(){
//     if(this.isEmpty()){
//       return 'queue empty'
//     }
//     return this.front.value
//   }

//   enqueue(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//       this.front = node
//       this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//     this.size++
//     return value
//   }

//   getSize(){
//     return this.size
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       return 'queue empty'
//     }
//     const value = this.front.value
//     this.front = this.front.next
//     this.size--
//     if(!this.front) this.rear = this.front
//     return value
//   }

//   display(){
//     if(this.isEmpty()){
//       return 'queue empty'
//     }
//     let curr = this.front
//     let str = ''
//     while(curr){
//       str += `${curr.value} `
//       curr = curr.next
//     }
//     return str.trim()
//   }
// }


// const queue = new QueueLL()
// // console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// // console.log(queue.isEmpty())
// console.log(queue.getSize())
// console.log(queue.display())
// queue.dequeue(20)
// // console.log(queue.print())
// console.log(queue.peek())
// console.log(queue.display())


// class CircularQueue{
//   constructor(size){
//     this.queue = new Array(size)
//     this.size = size
//     this.length = 0
//     this.front = -1
//     this.rear = -1
//   }

//   isEmpty(){
//     return this.length === 0
//   }

//   isFull(){
//     this.rear === this.front
//   }

//   enqueue(value){
//     if(this.isFull()){
//       console.log('queueu full')
//       return
//     }
//     this.rear = (this.rear + 1) % this.size
//     this.queue[this.rear] = value
//     this.length += 1
//     if(this.front === -1) this.front = this.rear
//     return value
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log("queue empty")
//       return
//     }
//     const value = this.queue[this.front]
//     this.queue[this.front] = undefined
//     this.front = (this.front + 1) % this.size
//     this.length -= 1
//     if(this.isEmpty()){
//       this.front = -1
//       this.rear = -1
//     }
//     return value
//   }

//   peek(){
//     if(this.isEmpty()){
//       console.log("queue empty")
//       return
//     }
//     return this.queue[this.front]
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("queue empty")
//       return
//     }
//     let result = []
//     let i = this.front
//     do {
//       result.push(this.queue[i])
//       i = (i + 1) % this.size
//     } while (i !== (this.rear + 1) % this.size);
//     console.log(result.join('->'))
//   }
// }

// const queue = new CircularQueue(5)
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

// queue.print()

// queue.enqueue(60)
// queue.print()




class StackQueue{
    constructor(){
        this.table = []
    }

    pop(){
        return this.table.shift()
    }

    push(value){
        this.table.push(value)
        let j = this.table.length-1
        while(j > 0){
            this.table.push(this.table.shift())
            j--
        }
        return value
    }
}