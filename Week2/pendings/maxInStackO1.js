class StackWithMax {
    constructor() {
      this.stack = []; // Main stack to store numbers
      this.maxStack = []; // Stack to store maximums
    }
  
    // Push an element onto the stack
    push(value) {
      this.stack.push(value);
      
      // If the max stack is empty or the value is greater than or equal to the current max, push it onto the max stack
      if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(value);
      }
    }
  
    // Pop an element from the stack
    pop() {
      const value = this.stack.pop();
      
      // If the popped value is the current max, pop it from the max stack as well
      if (value === this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.pop();
      }
      
      return value;
    }
  
    // Get the current maximum value in the stack in O(1) time
    getMax() {
      // The top of the max stack holds the maximum value
      return this.maxStack[this.maxStack.length - 1];
    }
}
  
let stack = new StackWithMax();
stack.push(10);
stack.push(20);
stack.push(5);
stack.push(25);
console.log(stack.getMax()); // Output: 25
stack.pop();
console.log(stack.getMax()); // Output: 20
stack.pop();
console.log(stack.getMax()); // Output: 20
stack.push(30);
console.log(stack.getMax()); // Output: 30