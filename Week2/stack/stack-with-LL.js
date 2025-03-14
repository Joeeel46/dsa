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
//         if(!this.top){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//         return node.value
//     }

//     pop(){
//         if(!this.top) return 'Stack Empty'
//         const value = this.top.value
//         this.top = this.top.next
//         this.size--
//         return value
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     peek(){
//         return this.top? this.top.value : "Stack Empty!"
//     }

//     print(){
//         if(!this.top) return 'Stack Empty!'
//         let curr = this.top
//         let str = ''
//         while(curr){
//             str += `${curr.value} `
//             curr = curr.next
//         }
//         return str.trim()
//     }
// }

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedListStack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(this.size === 0){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
        return value
    }

    pop(){
        if(this.size === 0){
            console.log("Stack Empty")
            return
        }else{
            const value = this.top.value
            this.top = this.top.next
            this.size--
            return value
        }
    }

    isEmpty(){
        return this.size === 0
    }

    peek(){
        if(this.size === 0){
            console.log("Stack Empty")
            return
        }else{
            return this.top.value
        }
    }

    print(){
        if(this.size === 0){
            console.log("Stack Empty")
            return
        }else{
            let curr = this.top
            let str = ''
            while(curr){
                str += `${curr.value} `
                curr = curr.next
            }
            return str.trim()
        }
        
    }
}

const stack = new LinkedListStack()

console.log(stack.isEmpty())
stack.push(3)
stack.push(5)
stack.push(7)
stack.push(8)
console.log(stack.print())
console.log(stack.pop())
console.log(stack.print())
console.log(stack.peek())
stack.push(9)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.print())