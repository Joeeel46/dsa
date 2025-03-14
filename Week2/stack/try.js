// class stackWithQueue{
//     constructor(){
//         this.queue = []
//         this.size = 0
//     }

//     push(value){
//         this.size++
//         this.queue.push(value)
//         let j = this.queue.length -1
//         while(j > 0){
//             this.queue.push(this.queue.shift())
//             j--
//         }
//         return value
//     }

//     pop(){
//         this.size--
//         return this.queue.shift()
//     }

//     getSize(){
//         return this.size 
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("Stack Empty")
//             return
//         }
//         return this.queue[0]
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Stack Empty")
//             return
//         }
//         let str = ''
//         for(let i = this.queue.length-1;i >= 0;i--){
//             str += `${this.queue[i]} `
//         }
//         return str.trim()
//     }
// }

// const stack = new stackWithQueue()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// console.log(stack.display()); 
// console.log(stack.peek());     
// console.log(stack.pop());      
// console.log(stack.display()); 
// console.log(stack.getSize());  
// console.log(stack.isEmpty());



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedListStack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//         return value
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log("empty")
//             return
//         }
//         const value = this.top.value
//         this.top = this.top.next
//         this.size--
//         return value
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("empty")
//             return
//         }
//         return this.top.value
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("empty")
//             return
//         }
//         let curr = this.top
//         let str = ''
//         while(curr){
//             str += `${curr.value} `
//             curr = curr.next
//         }
//         return str.trim()
//     }
// }

// const stack = new LinkedListStack()

// console.log(stack.isEmpty())
// stack.push(3)
// stack.push(5)
// stack.push(7)
// stack.push(8)
// console.log(stack.print())
// console.log(stack.pop())
// console.log(stack.print())
// console.log(stack.peek())
// stack.push(9)
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.print())


// class StackWithQueue{
//     constructor(){
//         this.queue = []
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     push(value){
//         let size = this.queue.length
//         this.queue.push(value)
//         while(size > 0){
//             this.queue.push(this.queue.shift())
//             size--
//         }
//         return value
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log('empty')
//             return
//         }
//         return this.queue.shift()
//     }

//     display(){
//         if (this.isEmpty()) {
//             console.log('empty')
//             return
//         }
//         return this.queue.join(' ')
//     }

//     getSize(){
//         return this.queue.length
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('empty')
//             return
//         }
//         return this.queue[0]
//     }
// }

// const stack = new StackWithQueue()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// console.log(stack.display());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.display());
// console.log(stack.getSize());
// console.log(stack.isEmpty());


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedListStack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//         return value
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log("Emopty")
//             return
//         }
//         const value = this.top.value
//         this.top = this.top.next
//         this.size--
//         return value
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("Emopty")
//             return
//         }
//         return this.top.value
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("Emopty")
//             return
//         }
//         let str = ''
//         let curr = this.top
//         while(curr){
//             str += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(str.trim())
//         return
//     }
// }



// const stack = new LinkedListStack()

// console.log(stack.isEmpty())
// stack.push(3)
// stack.push(5)
// stack.push(7)
// stack.push(8)
// stack.print()
// console.log(stack.pop())
// stack.print()
// console.log(stack.peek())
// stack.push(9)
// console.log(stack.peek())
// console.log(stack.pop())
// stack.print()


// class StackArray{
//     constructor(){
//         this.stack = []
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     push(value){
//         this.stack[this.size] = value
//         this.size++
//         return value
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log("satck empty")
//             return
//         }
//         this.size--
//         const value = this.stack[this.size]
//         this.stack[this.size] = null
//         return value
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("satck empty")
//             return
//         }
//         return this.stack[this.size-1]
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("satck empty")
//             return
//         }
//         let str = ''
//         for(let i = 0;i < this.size;i++){
//             str += `${this.stack[i]} `
//         }
//         console.log(str.trim())
//     }
// }


// const stack = new StackArray();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.push(60));
// stack.display(); 
// stack.pop()
// stack.pop()
// console.log(stack.peek()); 
// stack.display() 






class StackQueue{
    constructor(){
        this.queue = []
    }

    
}