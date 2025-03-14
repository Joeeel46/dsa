class QueueStack{
    constructor(){
        this.stack1 = []  //for enqueue
        this.stack2 = []  //for dequeue
    }

    enqueue(value){
        return this.stack1.push(value)
    }

    dequeue(){
        if(this.stack2.length === 0){
            if(this.stack1.length === 0){
                return null
            }
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack2.length > 0){
            return this.stack2[this.stack2.length-1]
        }
        if(this.stack1.length > 0){
            return this.stack1[0]
        }
        return null
    }

    isEmpty(){
        return this.stack1.length === 0 && this.stack2.length === 0
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty!")
            return
        }
        let result = []
        for(let i = this.stack2.length-1;i >= 0;i--){
            result.push(this.stack2[i])
        }
        for(let i = 0;i < this.stack1.length;i++){
            result.push(this.stack1[i])
        }
        console.log(result.join(" -> "))
    }
}

let queue = new QueueStack()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.display()
queue.dequeue(40)
queue.display()
console.log(queue.peek())