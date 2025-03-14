///circular queue  also reffered as circular buffer or ring buffer

// class CircularQueue{
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.rear = -1
//         this.front = -1
//     }

//     isFull(){
//         return this.currentLength === this.capacity
//     }

//     isEmpty(){
//         return this.currentLength === 0
//     }

//     enqueue(value){
//         if(!this.isFull()){
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = value
//             this.currentLength += 1
//             if(this.front === -1){
//                 this.front = this.rear
//             }
//         }else{
//             console.log("Queue is Full!");
//             return;
//         }
//     }

    

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty!");
//             return null;
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength -= 1
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear = -1
//         }
//         return item
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         console.log("Queue is Empty!");
//         return null;
//     }

//     print(){
//         if (this.isEmpty()) {
//             console.log("Queue is Empty!");
//             return;
//         }
//         let i = this.front;
//         let result = [];
//         do {
//             result.push(this.items[i]);
//             i = (i + 1) % this.capacity;
//         } while (i !== (this.rear + 1) % this.capacity);
//         console.log(result.join(" "));
//     }
// }

class CircularQueue{

    constructor(size){
        this.items = new Array(size)
        this.capacity = size
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    peek(){
        if(this.isEmpty()) {
            console.log("Queue Empty!")
            return
        }else{
            return this.items[this.front]
        }
    }

    enqueue(value){
        if(this.isFull()){
            console.log("Queue full!")
            return
        }else{
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = value
            this.currentLength += 1
            if(this.front === -1) this.front = this.rear
            return value
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue Empty!")
            return
        }else{
            const value = this.items[this.front]
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.currentLength -= 1
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
            return value
        }
    }

    print(){ 
        if(this.isEmpty()){
            console.log("Queue is Empty!")
        }else{
            let i = this.front
            let result = []
            do {
                result.push(this.items[i])
                i = (i + 1) % this.capacity
            } while (i !== (this.rear + 1) % this.capacity);

            console.log(result.join(' '))
        }
    }
}



const queue = new CircularQueue(5)
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.print()

console.log(queue.dequeue())
console.log(queue.peek())

queue.print()

queue.enqueue(60)
queue.print()

