class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queueLinkedList{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const value = this.front.value
        this.front = this.front.next
        this.size--
        if(!this.front) this.rear = null
        return value
    }

    display(){
        if(this.isEmpty()) return 'Queue Empty!'
        let curr = this.front
        let str = ''
        while(curr){
            str += `${curr.value} `
            curr = curr.next
        }
        return str.trim()
    }

    peek(){
        return this.front? this.front.value : null
    }
}



const queue = new queueLinkedList()
// console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
// console.log(queue.isEmpty())
console.log(queue.getSize())
console.log(queue.display())
queue.dequeue(20)
// console.log(queue.print())
console.log(queue.peek())
console.log(queue.display())