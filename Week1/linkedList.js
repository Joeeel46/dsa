class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("The List is Empty!")
        }else{
            let curr = this.head
            let str = ""
            while(curr){
                str += `${curr.value} `
                curr = curr.next
            }
            console.log(str)
        }
    }

    printArr(){
        if(this.isEmpty()){
            console.log("The List is Empty!")
        }else{
            let arr = []
            let curr = this.head
            while(curr){
                arr.push(curr.value)
                curr = curr.next
            }
            console.log(arr)
        }
    }

    insert(index,value){
        if(index < 0 || index > this.getSize()) return console.log("Invalid Index!")
        if(index === 0){
            this.prepend(value)
        }else if(index === this.getSize()){
            this.append(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0;i < index - 1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size) {
            console.log("Invalid Index!")
            return
        }

        if(index === 0){
            this.head = this.head.next
        }else{
            let curr = this.head
            for(let i = 0;i < index -1;i++){
                curr = curr.next
            }
            curr.next = curr.next.next
        }
        this.size--
    }

    //function to remove a given value from an linked list
    removeValue(value){
        if(!this.head) return null
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return
        }
        let curr = this.head
        while(curr.next && curr.next.value !== value){
            curr = curr.next
        }
        if(curr.next){
            // console.log(curr.next.value)
            curr.next = curr.next.next
            this.size--
        }else{
            console.log("Value not found!")
        }
    }

    search(value){
        if(!this.head) return -1
        let curr = this.head
        let i = 0
        while(curr && curr.value !== value){
            curr = curr.next
            i++
        }
        if(curr){
            return i
        }
        
        return -1
        
    }

    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    arrayToList(arr){
        arr.forEach(val => this.append(val));
    }

    findLength(){
        let len = 0
        let curr = this.head
        while(curr){
            curr = curr.next
            len++
        }
        return len
    }

    checkIfEmpty(){
        return !this.head
    }

    findMiddleElem(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    cycleCheck() {
        let fast = this.head;
        let slow = this.head;
    
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    createCircularList(){
        if(!this.head) return console.log("List Empty")
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = this.head
    }


///parctice more 

    removeDuplicates() {
        if (!this.head) {
            console.log("List is Empty!");
            return;
        }

        let curr = this.head;
        let prev = null;
        let set = new Set();

        while (curr) {
            if (set.has(curr.value)) {
                prev.next = curr.next;
                this.size--;
            } else {
                set.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    removeSortedDuplicates() {
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }

    checkValue(value){
        if(!this.head){
            console.log("List Empty!")
            return
        }
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return true
            }
            curr = curr.next
        }
        return false
    }

    indexValue(index){
        if(index < 0 || index >= this.size) return null
        let curr = this.head
        for(let i = 0;i < index;i++){
            curr = curr.next
        }
        return curr ? curr.value : null;
    }

    reversePrint(curr){
        if(!curr) return
        console.log(curr.value)//for normalprint
        this.reversePrint(curr.next)
        console.log(curr.value)//for reverseprint
    }

    // reversePrint(){
    //     if(!this.head){
    //         console.log("List is empty!")
    //         return
    //     }
    //     let arr = []
    //     let curr = this.head
    //     while(curr){
    //         arr.push(curr.value)
    //         curr = curr.next
    //     }
    //     while(arr.length > 0){
    //         console.log(arr.pop())
    //     }
    // }

    count(value){
        let curr = this.head
        let count = 0
        while(curr){
            if(curr.value === value) count++
            curr = curr.next
        }
        return count
    }

    //Write a function to find the value of the nth node from the end of the linked list.
    findNthNodeFromEnd(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid Index!");
            return null;
        }
        let fast = this.head;
        let slow = this.head;
        
        // Move `fast` ahead by `index` steps
        for (let i = 0; i < index; i++) {
            if (!fast) return null;
            fast = fast.next;
        }
    
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }
    
        return slow.value;
    }

    deleteMiddle() {
        if (!this.head) return null;
        if (!this.head.next) {
            this.head = null;
            this.size--;
            return;
        }
    
        let fast = this.head;
        let slow = this.head;
        let prev = null;
    
        while (fast && fast.next) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
    
        if (prev) prev.next = slow.next;
        this.size--;
    }

    //Write a function to remove every kth node from the linked list.
    removeEverykthNode(k) {
        if (k <= 0 || k > this.size) {
            console.log("Invalid value of k!");
            return;
        }
        if (k === 1) {
            this.head = null;
            this.size = 0;
            return;
        }
    
        let curr = this.head;
        let count = 1;
        let prev = null;
    
        while (curr) {
            if (count % k === 0) {
                if (prev) {
                    prev.next = curr.next;
                } else {
                    this.head = curr.next;
                }
                this.size--;
            } else {
                prev = curr;
            }
            curr = curr.next;
            count++;
        }
    }
}

let a = [3,2,4,5,6,4]

const list = new LinkedList()
list.append(4)
list.append(9)
list.append(5)
list.append(8)
list.append(1)
list.append(7)
list.append(3)
list.append(6)
list.append(2)
// list.insert(3,3)
// list.reverse()
// list.print()
// list.arrayToList(a)
// console.log(list.findMiddleElem())
list.print()
list.deleteMiddle()
list.print()
// console.log(list.search())

// console.log(list.findNthNodeFromEnd(0))
// list.reversePrint()


