 // class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }




// optimized way
// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }

//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear++
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear - this.front
//     }

//     print(){
//         console.log(this.items)
//     }
// }

class Queue{
    constructor(){
        this.queue = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(value){
        this.queue[this.rear] = value
        this.rear++
        return value
    }

    dequeue(){
        const value = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return value
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.queue[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(Object.values(this.queue).join(' '))
    }
}


const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(6)
queue.enqueue(8)
console.log(queue.dequeue())      
console.log(queue.size())      
console.log(queue.peek())      
queue.print()



