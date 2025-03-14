// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }
// }



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
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
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
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        let curr = this.head
        let str = ''
        while(curr){
            str += `${curr.value} `
            curr = curr.next
        }
        console.log(str)
    }

    printArr(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        console.log(arr)
    }

    insert(index,value){
        if(index < 0 || index > this.size){
            console.log("Invalid Index!")
            return
        }
        const node = new Node(value)
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let curr = this.head
            for(let i = 0;i < index -1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            
        }
        this.size++
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            console.log("Invalid Index!")
            return
        }
        let curr = this.head
        if(index === 0){
            this.head = this.head.next
        }else{
            for(let i = 0;i < index -1;i++){
                curr = curr.next
            }
            curr = curr.next.next
        }
        this.size--
    }

    removeValue(value){
        if(!this.head){
            console.log("List is Empty!")
            return
        }

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
            curr.next = curr.next.next
            this.size--
        }else{
            console.log("Value not found!")
        }
    }

    search(value){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        if(this.head.value === value){
            return 0
        }
        let curr = this.head
        let i = 0
        while(curr.next){
            i++
            curr = curr.next
            if(curr.next.value === value){
                return i
            }
        }
        return -1
    }


    //practice
    reverse(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        
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
        arr.forEach(val => {this.append(val)});
    }

    findLength(){
        let i = 0
        let curr = this.head
        while(curr){
            curr = curr.next
            i++
        }
        return i
    }

    checkEmpty(){
        return !this.head
    }

    findMiddleElem(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        if(this.size === 1){
            return this.head.value
        }
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    cycleCheck(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(fast === slow){
                return true
            }
        }
        return false
    }

    createCircularList(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = this.head
    }
    // practce
    removeDuplicates(){
        if(this.size === 1){
            console.log("No duplicates found!")
            return
        }
        let curr = this.head
        let prev = null
        let set = new Set()
        while(curr.next){
            if(set.has(curr.value)){
                prev.next = curr.next
                this.size--
            }else{
                set.add(curr.next.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    removeSortedDuplicates(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        let curr = this.head
        while(curr && curr.next){
            if(curr.value === curr.next.value){
                curr.next = curr.next.next
                this.size--
            }else{
                curr = curr.next
            }
        }
    }

    checkValue(value){
        if(!this.head){
            console.log("List is Empty!")
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
        if(index < 0 || index >= this.size){
            console.log("Invalid Index!")
            return
        }
        let curr = this.head
        
        for(let i = 0;i < index;i++){
            curr = curr.next
        }
        
        return curr ? curr.value : null
        
    }

    reversePrint(curr){
        if(!curr){
            return
        }
        console.log(curr.value)//forward print
        this.reversePrint(curr.next)
        console.log(curr.value)//revese print
    }

    forwardPrint(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        while(arr.length > 0){
            console.log(arr.pop())
        }
    }

    count(value){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        let count = 0
        let curr = this.head
        while(curr){
            if(curr.value === value) count++
            curr = curr.next
        }
        return count
    }
    //Write a function to find the value of the nth node from the end of the linked list.
    findNthNodeFromEnd(index){
        if(!this.head){
            console.log("List is Empty!")
            return
        }

        if(index <= 0 || index > this.size){
            console.log("Invalid Index!")
            return
        }
        
        let actualIndex = this.size - index -1
        let curr = this.head
        for(let i = 0;i < actualIndex;i++){
            curr = curr.next
        }
        return curr.value
    }

    deleteMiddle(){
        if(!this.head){
            console.log("List Empty!")
            return
        }
        if(!this.head.next){
            this.head = this.head.next
            this.size--
            return
        }
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev ? prev.next = slow.next : this.head = slow.next
        this.size--
    }

    removeEveryKthNode(k){
        if(!this.head){
            console.log("List is Empty!")
            return
        }
        if (k > this.size) {
            console.log("Value doesn't exist!");
            return;
        }
        let count = 1
        let curr = this.head
        let prev = null
        while(curr){
            if(count % k == 0){
                if(!prev){
                    this.head = curr.next
                }else{
                    prev.next = curr.next
                }
                this.size--
            }else{
                prev = curr
            }
            curr = curr.next
            count++
        }
    }
}



const list = new LinkedList()
list.append(4)
list.append(9)
list.append(5)
list.append(8)
list.append(1)
list.append(7)
list.print()
list.forwardPrint()