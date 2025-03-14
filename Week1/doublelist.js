class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    reverse(){
        let curr = this.head
        let temp = null
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp

            curr = curr.prev
        }

        if(temp){
            this.head = this.tail
            this.tail = temp.prev
        }
    }
    
    delete(value) {
        if (!this.head) return null;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                if(curr.prev) curr.prev.next = curr.next
                if(curr.next) curr.next.prev = curr.prev
                if(curr === this.head) this.head = curr.next
                if(curr === this.tail) this.tail = curr.prev
                this.size--
                return
            }
            curr = curr.next
        }
    }

    search(value){
        let curr = this.head
        let index = 0
        while(curr){
            if(curr.value === value) return index
            index++
            curr=curr.next
        }
        return -1
    }

    print(){
        let curr = this.head
        let str = ''
        while(curr){
            str += `${curr.value} `
            curr = curr.next
        }
        console.log(str)
    }
}


let list = new DoublyLinkedList()
list.append(2)
list.append(4)
list.append(6)
list.append(8)
list.append(9)
// list.delete(2)
list.print()
// console.log(list.search())