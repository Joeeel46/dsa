class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
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
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    //DFS
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    //
    //BFS
    levelOrder(root){
        if(root === null) return []
        let queue = []
        queue.push(root)
        while(queue.length > 0){
            let crr = queue.shift()
            console.log(crr.value)
            if(crr.left !== null){
                queue.push(crr.left)
            }
            if(crr.right !== null){
                queue.push(crr.right)
            }
        }
    }
    //
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(root.right){
            return this.max(root.right)
        }else{
            return root.value
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isValidBST() {
        const validate = (root, min, max) => {
            if (!root) return true
            if (root.value <= min || root.value >= max) return false
            return validate(root.left, min, root.value) && validate(root.right, root.value, max)
        }
        return validate(this.root, -Infinity, Infinity)
    }


    maxDepth(root){
        if(root===null) return 0
        let leftHeight = this.maxDepth(root.left);
        let rightHeight = this.maxDepth(root.right);
        return Math.max(leftHeight,rightHeight) + 1;
    }

    secondLargest(root){
        if(root === null){
            return null;
        }

        let parent = null;
        let curr = root;

        while(curr.right){
            parent = curr;
            curr = curr.right;
        }

        if(curr.left){
            return this.max(curr.left);
        }
        return parent.value;
    }


    closest(target){
        let curr = this.root;
        let close = Infinity;
        while(curr){
            if(Math.abs(curr.value - target) < Math.abs(close-target)){
                close = curr.value;
            }
            if(curr.value < target){
                curr = curr.right;
            }else if(curr.value > target){
                curr = curr.left;
            }else{
                return curr.value;
            }
        }
        return close;
    }

    balanced(root){
        return this.isBalanced(root) !== -1;
    }

    isBalanced(root){
        if(root === null){
            return 0
        }

        let leftHeight = this.isBalanced(root.left)
        if(leftHeight === -1) return -1

        let rightHeight = this.isBalanced(root.right)
        if(rightHeight === -1) return -1

        if(Math.abs(rightHeight - leftHeight) > 1) return -1 

        return Math.max(leftHeight,rightHeight) + 1
    }
}


const bst = new BinarySearchTree()
// console.log(bst.isEmpty())


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.levelOrder()
bst.delete(10)
bst.levelOrder()

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(bst.root, 190))
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// console.log(bst.min(bst.root));
