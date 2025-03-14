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

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(!this.head){
            console.log("List is Empty!")
            return
        }else{
            let str = ''
            let curr = this.head
            while(curr){
                str += `${curr.value} `
                curr = curr.next
            }
            return str
        }
    }

    reversePrint(curr){
        if(!curr) return
        // console.log(curr.value)
        this.reversePrint(curr.next)
        console.log(curr.value)
    }

    toArray(){
        if(!this.head){
            console.log('List is Empty!')
            return
        }
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        return arr
    }

    insert(index,value){
        if(this.size < index || index < 0) {
            console.log("Invalid index")
            return
        }
        const node = new Node(value)
        let curr = this.head
        for(let i = 1;i < index;i++){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node
        this.size++
    }

    

    removeFrom(index){
        if(this.size <= index || index < 0){
            console.log("Invalid Index!")
            return
        }
        if(index === 0){
            this.head = this.head.next
            this.size--
            return
        }
        let curr = this.head
        for(let i = 1;i < index;i++){
            curr = curr.next
        }
        curr.next = curr.next.next
        this.size--
    }

    removeVal(value){  //O(n)
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
        if(!curr.next){
            console.log("Value not found!")
            return
        }
        curr.next = curr.next.next
        this.size--
    }

    search(value){  //O(n)
        if(!this.head) return null
        if(this.head.value === value){
            return 0
        }
        let i = 1
        let curr = this.head
        while(curr.next && curr.next.value !== value){
            curr = curr.next
            i++
            if(curr.next.value === value) return i
        }
        return -1
    }

    reverse(){  //O(n)
        if(!this.head) return null
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

    listToArray(arr){  //O(n)
        arr.forEach(elem => {this.append(elem)});
    }

    findLen(){  //O(n)
        if(!this.head) return 0
        let curr = this.head
        let i = 0
        while(curr){
            curr = curr.next
            i++
        }
        return i
    }

    checkEmpty(){  //O(1)
        return !this.head
    }

    findMiddleElem(){  //O(n)
        if(!this.head) return null
        if(this.size === 1) return this.head.value
        let fast = this.head
        let slow = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }
        return slow.value
    }

    deleteMiddle(){
        if(!this.head) return null
        if(this.size === 1){
            this.head = null
            this.size--
            return
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        prev.next = prev.next.next
        this.size--
    }

    cycleCheck(){  //O(n)
        let fast = this.head
        let slow = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
            if(fast === slow) return true
        }
        return false
    }

    createCircularList(){  //O(n)
        if(!this.head) return null
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = this.head
    }

    removeDuplicates(){  //O(n)
        if(!this.head) return null
        if(this.size === 1){
            console.log("Only one element exists!")
            return
        }
        let set = new Set()
        let curr = this.head
        set.add(curr.value)
        while(curr.next){
            if(!set.has(curr.next.value)){
                set.add(curr.next.value)
                curr = curr.next
            }else{
                curr.next = curr.next.next 
                this.size--
            }
        }
    }

    checkVal(value){  //O(n)
        if(!this.head) return null
        let curr = this.head
        while(curr){
            if(curr.value === value) return true
            curr = curr.next
        }
        return false
    }

    indexVal(index){  //O(n)
        if(!this.head) return null
        if(this.size < index || index < 0){
            console.log("Invalid Index!")
            return
        }
        let curr = this.head
        for(let i = 0;i < index;i++){
            curr = curr.next
        }
        return curr ? curr.value : null
    }

    forwardPrint(){  //O(n)
        if(!this.head) return null
        let arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        while(arr.length > 0){
            console.log(arr.shift()) ///pop
        }
    }

    count(value){  //O(n)
        if(!this.head) return null
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value === value) i++
            curr = curr.next
        }
        return i
    }

    findNthNodeFromEnd(index){
        if(!this.head) return null
        if(index > this.size || index < 0){
            console.log('List is Empty!')
            return
        }
        let actual = this.size - index -1
        let curr = this.head
        for(let i = 0;i < actual;i++){
            curr = curr.next
        }
        return curr.value
    }

    removeEveryKthNode(k){
        if(!this.head || k<=0) return null
        if(k === 1){
            this.head = null
            this.size = 0
            return
        }
        let count = 1
        let curr = this.head
        let prev = null
        while(curr){
            if(count % k === 0){
                if (prev) {
                    prev.next = curr.next;
                } else {
                    this.head = curr.next; // If head itself is K-th, update head
                }
                this.size--;
            }else{
                prev = curr
            }
            curr = curr.next
            count++
        }
    }
}

let arr = [2,3,1,4,5,6,7,3]
let list = new LinkedList()

let list1 = new LinkedList()
let list2 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(3)
list1.append(5)
// list1.append(6)
// list1.append(8)
// console.log(list1.findNthNodeFromEnd(2))
// console.log(list1.count(2))
// list1.forwardPrint()
// list1.reversePrint(list1.head)
// console.log((list1.search(5)))
// console.log(list1.print())
// list.listToArray(arr)
// console.log((list.print()))

list2.append(1)
list2.append(2)
list2.append(3)
list2.append(5)

// function equal(list1,list2){
//     let node1 = list1.head
//     let node2 = list2.head
//     while(node1 && node2){
        
//         if(node1.value !== node2.value){
//             return false
//         }
//         node1 = node1.next
//         node2 = node2.next
//     }
//     return node1 === null && node2 === null
// }
console.log(equal(list1,list2))



function equal(list1,list2){
    let node1 = list1.head
    let node2 = list2.head
    while(node1 && node2){
        if(node1.value !== node2.value) return false
        node1 = node1.next
        node2 = node2.next
    }
    return node1 === null && node2 === null
}

