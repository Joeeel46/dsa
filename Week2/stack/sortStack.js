class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(data) {
      this.stack.push(data);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    sortWithStack() {
      let tempStack = []
      while(this.stack.length > 0){
          let current = this.stack.pop()
          while(tempStack.length > 0 && tempStack[tempStack.length - 1] > current){
              this.stack.push(tempStack.pop())
          }
          tempStack.push(current)
      }
      while(tempStack.length > 0){
        this.stack.push(tempStack.pop())
      }
    }
}
