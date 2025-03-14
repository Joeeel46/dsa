
// class Stack{
//     constructor(){
//         this.stack = []
//         this.size = 0
//     }

//     push(value){
//         if(this.size >= this.stack.length) return "Stack Overflow!"
//         this.stack[this.size] = value
//         this.size++
//         return value
//     }

//     pop(){
//         if(this.size === 0) return 'Stack Empty!'
//         this.size--
//         return this.stack[this.size-1]
//     }

//     peek(){
//         return this.stack[this.size-1]
//     }

//     display(){
//         if(this.size === 0) return 'Stack Empty!'
//         let str = ''
//         for(let i = 0;i < this.size;i++){
//             str += `${this.stack[i]} `
//         }
//         return str
//     }
// }

class StackWithArray{
    constructor(){
        this.stack = []
        this.size = 0
    }

    push(value){
        this.stack[this.size] = value
        this.size++
        return value
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack Empty!")
            return
        }
        this.size--
        return this.stack[this.size]
    }

    isEmpty(){
        return this.size === 0
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack Empty!")
            return
        }
        return this.stack[this.size-1]
    }

    display(){
        if(this.isEmpty()){
            console.log("Stack Empty!")
            return
        }
        let str = ''
        for(let i = 0;i < this.size;i++){
            str += `${this.stack[i]} `
        }
        console.log(str.trim())
    }
}

const stack = new StackWithArray();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.push(60));
stack.display(); 
stack.pop()
stack.pop()
console.log(stack.peek()); 
stack.display() 