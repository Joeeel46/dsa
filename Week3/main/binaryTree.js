class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insertValue(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.root = node;
            return; // Return early after inserting the root
        }

        let queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let curr = queue.shift();

            if (curr.left === null) {
                curr.left = node;
                break;
            } else {
                queue.push(curr.left);
            }

            if (curr.right === null) {
                curr.right = node;
                break;
            } else {
                queue.push(curr.right);
            }
        }
    }
}

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            let queue = []
            queue.push(this.root)
            while(queue.length > 0){
                let curr = queue.shift()
                if(curr.left === null){
                    curr.left = newNode
                    break
                }else{
                    queue.push(curr.left)
                }
                if(curr.right === null){
                    curr.right = newNode
                    break
                }else{
                    queue.push(curr.right)
                }
            }
        }
    }
}