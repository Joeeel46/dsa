/*1.  rev a String recursion   Athul
2.  Hello World reverse each word 
3.  aabbcccda 2a2b3c1a
4.  [0, 1, [0, [0]]]  take ctr for zeros*/


// function reverse(str){
//     if(str.length === 0) return ""
//     return str[str.length -1] + reverse(str.slice(0,-1))
// }

// console.log(reverse('Athul'))

// let str = "Hello World"
// str = str.split(' ')
// for(let j = 0;j <= str.length -1;j++){
//     let str1 = ""
//     for(let i = str[j].length-1;i >= 0;i--){
//         str1 += str[j][i]
//     }
//     str[j] = str1
// }

// console.log(str.join(' '))

// function countA(str){
//     str = str.split('').sort().join('')
//     let count = 0
//     let ans = ''
//     for(let i = 0;i <= str.length-1;i++){
//         if(str[i] === str[i+1]){
//             count++
//         }else{
//             count++
//             ans+=`${count}${str[i]}`
//             count = 0
//         }
//     }
//     console.log(ans)
    
// }

// countA('aabbcccda')  //2a2b3c1a

// let arr = [0, 1, [0, [0]]]
// arr = arr.flat(Infinity)
// console.log(arr)
// let count = 0
// for(let val of arr){
//     if(val === 0) count++
// }
// console.log(count)


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
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        const node = new Node(value);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
        }

        this.size++;
    }
}


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
}