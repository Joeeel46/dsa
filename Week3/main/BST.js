class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // ✅ Time: O(1), Space: O(1)
    isEmpty() {
        return this.root === null;
    }

    // ✅ Time: O(h), Space: O(h) recursive calls
    // h = height of tree
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // ✅ Time: O(h), Space: O(h) recursive stack
    search(root, value) {
        if (!root) return false;
        if (root.value === value) return true;
        if (value < root.value) return this.search(root.left, value);
        return this.search(root.right, value);
    }

    // ✅ Time: O(n), Space: O(h)
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // ✅ Time: O(n), Space: O(h)
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // ✅ Time: O(n), Space: O(h)
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // ✅ Time: O(n), Space: O(n)
    levelOrder(root) {
        if (root === null) return [];
        const queue = [root];
        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr.value);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    // ✅ Time: O(h), Space: O(h)
    min(root) {
        if (!root.left) return root.value;
        return this.min(root.left);
    }

    // ✅ Time: O(h), Space: O(h)
    max(root) {
        if (!root.right) return root.value;
        return this.max(root.right);
    }

    // ✅ Time: O(h), Space: O(h)
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) return root;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Case 1: No child
            if (!root.left && !root.right) return null;

            // Case 2: One child
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            // Case 3: Two children
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    // ✅ Time: O(n), Space: O(h)
    isValidBST() {
        const validate = (root, min, max) => {
            if (!root) return true;
            if (root.value <= min || root.value >= max) return false;
            return validate(root.left, min, root.value) &&
                   validate(root.right, root.value, max);
        };
        return validate(this.root, -Infinity, Infinity);
    }

    // ✅ Time: O(n), Space: O(h)
    maxDepth(root) {
        if (root === null) return 0;
        const left = this.maxDepth(root.left);
        const right = this.maxDepth(root.right);
        return Math.max(left, right) + 1;
    }

    // ✅ Time: O(h), Space: O(1)
    secondLargest(root) {
        if (!root) return null;
        let parent = null;
        let curr = root;
        while (curr.right) {
            parent = curr;
            curr = curr.right;
        }

        if (curr.left) {
            return this.max(curr.left); // Second largest is the largest in left subtree
        }
        return parent ? parent.value : null;
    }

    // ✅ Time: O(h), Space: O(1)
    closest(target) {
        let curr = this.root;
        let close = Infinity;
        while (curr) {
            if (Math.abs(curr.value - target) < Math.abs(close - target)) {
                close = curr.value;
            }
            if (curr.value < target) {
                curr = curr.right;
            } else if (curr.value > target) {
                curr = curr.left;
            } else {
                return curr.value;
            }
        }
        return close;
    }

    // ✅ Time: O(n), Space: O(h)
    balanced(root) {
        return this.isBalanced(root) !== -1;
    }

    isBalanced(root) {
        if (root === null) return 0;

        const left = this.isBalanced(root.left);
        if (left === -1) return -1;

        const right = this.isBalanced(root.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
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
