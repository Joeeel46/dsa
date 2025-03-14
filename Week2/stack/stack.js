
// class Stack{
//     constructor(){
//         this.stack = []
//         this.size = 0
//     }

//     push(value){
//         this.stack.push(value)
//         this.size++
//         return value
//     }

//     pop(){
//         if(this.stack.length === 0){
//             return 'Stack Empty!'
//         }
//         this.size--
//         return this.stack.pop()
//     }

//     peek(){
//         return this.stack.length === 0? 'Stack Empty!' : this.stack[this.stack.length-1]
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     getSize(){
//         return this.size
//     }

//     display(){
//         if(this.stack.length === 0){
//             console.log("Stack Empty!")
//             return
//         }else{
//             let str = ''
//             for(let i = this.stack.length-1;i >= 0;i--){
//                 str += `${this.stack[i]} `
//             }
//             console.log(str.trim())
//         }
//     }
// }

class Stack{
    constructor(){
        this.stack = []
        this.size = 0
    }

    push(value){
        this.size++
        return this.stack.push(value)
    }

    pop(){
        if(this.size === 0){
            console.log("Stack Empty!")
            return
        }
        this.size--
        return this.stack.pop()
    }

    peek(){
        if(this.size === 0){
            console.log("Stack Empty!")
            return
        }
        return this.stack[this.size-1]
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    display(){
        if(this.size === 0){
            console.log("Stack Empty!")
            return
        }
        let str = ''
        for(let i = 0;i < this.size;i++){
            str += `${this.stack[i]} `
        }
        console.log(str)
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // 30 20 10
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.getSize()); // 2