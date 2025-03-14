// class stackWithQueue{
//     constructor(){
//         this.queue = []
//     }

//     push(value){
//         let size = this.queue.length
//         this.queue.push(value)
//         while(size > 0){
//             this.queue.push(this.queue.shift())
//             size--
//         }
//     }

//     pop(){
//         return this.queue.length? this.queue.shift() : null
//     }

//     peek(){
//         return this.queue.length? this.queue[0] : null
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     getSize(){
//         return this.queue.length
//     }

//     display(){
//         return this.queue.length? this.queue.join(' ') : 'Stack Empty!'
//     }
// }


// class stackWithQueue{
//     constructor(){
//         this.queue = []
//         this.size = 0
//     }

//     push(value){
//         let size = this.queue.length
//         this.queue.push(value)
//         while(size > 0){
//             this.queue.push(this.queue.shift())
//             size--
//         }
//         this.size++
//         return value
//     }

//     pop(){
//         if(this.size === 0) return "Stack Empty!"
//         this.size--
//         return this.queue.shift()
//     }

//     peek(){
//         return this.size === 0 ? 'Stack Empty!' : this.queue[0]
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     display(){
//         return this.size === 0? 'Stack Empty!' : this.queue.join(' ')
//     }
// }


class stackWithQueue{
    constructor(){
        this.queue = []
    }

    push(value){
        this.size++
        this.queue.push(value)
        let j = this.queue.length - 1
        while(j > 0){
            this.queue.push(this.queue.shift())
            j--
        }
        return value
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack Empty!")
            return
        }
        this.size--
        return this.queue.shift()
    }

    getSize(){
        return this.queue.length
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(this.isEmpty()){
            console.length("Stack Empty!")
            return
        }
        return this.queue[0]
    }

    display(){
        if(this.isEmpty()){
            console.log("Stack Empty!")
            return
        }
        let str = ''
        for(let i = this.queue.length-1;i >= 0;i--){
            str += `${this.queue[i]} `
        }
        return str.trim()
    }
}

const stack = new stackWithQueue()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
console.log(stack.display());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.display());
console.log(stack.getSize());
console.log(stack.isEmpty());