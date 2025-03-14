// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.right = null
// //         this.left = null
// //     }
// // }

// // class BST{
// //     constructor(){
// //         this.root = null
// //     }

// //     isEmpty(){
// //         return this.root === null
// //     }

// //     insert(value){
// //         const node = new Node(value)
// //         if(this.isEmpty()){
// //             this.root = node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }

// //     insertNode(root,newNode){
// //         if(root.value < newNode){
// //             if(root.left === null){
// //                 root.left = newNode
// //             }else{
// //                 this.insertNode(root.left,newNode)
// //             }
// //         }else{
// //             if(root.right === null){
// //                 root.right = newNode
// //             }else{
// //                 this.insertNode(root.right,newNode)
// //             }
// //         }
// //     }

// //     search(root,value){
// //         if(!root){
// //             return false
// //         }else{
// //             if(root.value === value){
// //                 return true
// //             }
// //             if(value < root.value){
// //                 this.search(root.left,value)
// //             }else{
// //                 this.search(root.right,value)
// //             }
// //         }
// //     }

// //     ///DFS
// //     preOrder(root){
// //         if(root){
// //             console.log(root.value)
// //             this.preOrder(root.left)
// //             this.preOrder(root.right)
// //         }
// //     }

// //     inOrder(root){
// //         if(root){
// //             this.inOrder(root.left)
// //             console.log(root.value)
// //             this.inOrder(root.right)
// //         }
// //     }

// //     postOrder(root){
// //         if(root){
// //             this.postOrder(root.left)
// //             this.postOrder(root.right)
// //             console.log(root.value)
// //         }
// //     }
// //     //

// //     //BFS
// //     levelOrder(){
// //         let queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let curr = queue.shift()
// //             console.log(curr.value)
// //             if(curr.left){
// //                 queue.push(curr.left)
// //             }else if(curr.right){
// //                 queue.push(curr.right)
// //             }
// //         }
// //     }
// //     //
// //     min(root){
// //         if(root.left){
// //             return this.min(root.left)
// //         }else{
// //             return root.value
// //         }
// //     }

// //     max(root){
// //         if(root.right){
// //             return this.max(root.right)
// //         }else{
// //             return root.value
// //         }
// //     }

// //     delete(value){
// //         this.root = this.deleteNode(this.root,value)
// //     }

// //     deleteNode(root,value){
// //         if(root == null){
// //             return root
// //         }
// //         if(value < root.value){
// //             root.left = this.deleteNode(root.left,value)
// //         }else if(value > root.value){
// //             root.right = this.deleteNode(root.right,value)
// //         }else{
// //             if(!root.left && !root.right){
// //                 return null
// //             }
// //             if(!root.left){
// //                 return root.right
// //             }else if(!root.right){
// //                 return root.left
// //             }
// //             right.value = this.min(root.right)
// //             right.right = this.deleteNode(right.right,right.value)
// //         }
// //         return root
// //     }

// //     isValidBST(){
// //         return this.validate(this.root,-Infinity,Infinity)
// //     }

// //     validate(root,min,max){
// //         if(root === null){
// //             return root
// //         }
// //         if(root.value <= min || root.value >= max){
// //             return false
// //         }
// //         return this.validate(root.left,min,root.value) && this.validate(root.right,root.value,max)
// //     }

// //     maxDepth(root){
// //         if(root === null){
// //             return 0
// //         }
// //         let leftHeight = this.maxDepth(root.left)
// //         let rightHeight = this.maxDepth(root.right)

// //         return Math.max(leftHeight,rightHeight) + 1
// //     }

// //     secondLargest(root){
// //         if(root === null){
// //             return null
// //         }

// //         let parent = null
// //         let curr = root
// //         while(curr.right){
// //             parent = curr
// //             curr = curr.right
// //         }
// //         if(curr.left){
// //             return this.max(curr.left)
// //         }
// //         return parent.value
// //     }

// //     closest(target){
// //         let curr = this.root
// //         let close = Infinity
// //         while(curr){
// //             if(Math.abs(curr.value - target) < Math.abs(close - target)){
// //                 close = curr.value
// //             }
// //             if(curr.value < target){
// //                 curr = curr.right
// //             }else if(curr.value > target){
// //                 curr = curr.left
// //             }else{
// //                 return curr.value
// //             }
// //         }
// //         return close
// //     }

// //     balanced(root){
// //         return this.isBalanced(root) !== -1
// //     }

// //     isBalanced(root){
// //         if(root === null){
// //             return 0
// //         }

// //         let leftHeight = this.isBalanced(root.left)
// //         if(leftHeight === -1){
// //             return -1
// //         }
// //         let rightHeight = this.isBalanced(root.right)
// //         if(rightHeight === -1){
// //             return -1
// //         }
// //         if(Math.abs(rightHeight-leftHeight) > 1){
// //             return -1
// //         }

// //         return Math.max(rightHeight,leftHeight) + 1
// //     }
// // }

// // const bst = new BST()
// // bst.insert(10)
// // bst.insert(5)
// // bst.insert(15)
// // bst.insert(3)
// // bst.levelOrder()
// // bst.delete(10)
// // bst.levelOrder()



// ///graph

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacencyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacencyVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             delete this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             delete this.adjacencyList[vertex2].delete(vertex1)
//         }
//     }

//     display(){
//         for(let vertex of this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//         }
//     }
// }


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let curr = this.root
//         for(let val of word){
//             if(!curr.children[val]){
//                 curr.children[val] = new TrieNode()
//             }
//             curr = curr.children[val]
//         }
//         curr.endWord = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             const key = Object.keys(curr.children)
//             if(key.length !== 1 || curr.endWord) break
//             let char = key[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectAllWords(prefix,word,curr){
//         if(curr.endWord){
//             word.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectAllWords(prefix + key,word,curr.children[key])
//         }
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         let words = []
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return words
//             }
//             curr = curr.children[val]
//         }
//         this.collectAllWords(prefix,words,curr)
//         return words
//     }

//     search(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return false
//             }
//             curr = curr.children[val]
//         }
//         return curr.endWord
//     }
// }


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = null
//     }

//     insert(word){
//         let curr = this.root
//         for(let val of word){
//             if(!curr.children[val]){
//                 curr.children[val] = new TrieNode()
//             }
//             curr = curr.children[val]
//         }
//         curr.endWord = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let keys = Object.keys(curr.children)
//             if(keys.length !== 1 || curr.endWord) break
//             let char = keys[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectedAllWords(prefix,words,curr){
//         if(curr.endWord){
//             words.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectedAllWords(prefix + key,words,curr.children[key])
//         }
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         let words = []
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return words
//             }
//             curr = curr.children[val]
//         }
//         this.collectedAllWords(prefix,words,curr)
//         return words
//     }

//     search(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return false
//             }
//             curr = curr.children[val]
//         }
//         return curr.endWord
//     }
// }



// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftChild(i){
//         return i * 2 + 1
//     }

//     getRightChild(i){
//         return i * 2 + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length - 1)
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] > this.heap[index]){
//             this.swap(parentIndex,index)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     extractMin(){
//         if(this.heap.length === 0){
//             return 0
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftChildIndex = this.getLeftChild(index)
//         let rightChildIndex = this.getRightChild(index)
//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
//             smallest = leftChildIndex
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
//             smallest = rightChildIndex
//         }
//         if(smallest !== index){
//             this.swap(smallest,index)
//             this.heapifyDown(smallest)
//         }
//     }

//     heapSort(arr){
//         const MinHeap = new MinHeap()
//         let sorted = []
//         for(let val of arr){
//             MinHeap.insert(val)
//         }
//         while(MinHeap.heap.length > 0){
//             sorted.push(MinHeap.extractMin())
//         }
//         return sorted
//     }
// }

// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endword = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = null
//     }

//     insert(word){
//         let curr = this.root
//         for(let val of word){
//             if(!curr.children[val]){
//                 curr.children[val] = new TrieNode()
//             }
//             curr = curr.children[val]
//         }
//         curr.endword = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let key = Object.keys(curr.children)
//             if(key.length !== 1 || curr.endword) break
//             let char = key[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectAllWords(prefix,words,curr){
//         if(curr.endword){
//             words.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectAllWords(prefix + key,word,curr.children[key])
//         }
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         let words = []
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return words
//             }
//             curr = curr.children[val]
//         }
//         this.collectAllWords(prefix,words,curr)
//         return words
//     }

//     search(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return false
//             }
//             curr = curr.children[val]
//         }
//         return curr.endword
//     }
// }



// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }
//             if(root.value > value){
//                 this.search(root.left,value)
//             }else if(root.value < value){
//                 this.search(root.right,value)
//             }
//         }
//     }

//     //DFS
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     //BFS
//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
        
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root === null){
//             return root
//         }
//         if(root.value > value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(root.value < value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.right){
//                 return root.left
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,value)
//         }
//         return root
//     }

//     isValidBST(){
//         return this.validate(this.root,-Infinity,Infinity)
//     }

//     validate(root,min,max){
//         if(root === null){
//             return true
//         }

//         if(root.value <= min || root.value >= max){
//             return false
//         }

//         return this.validate(root.right,root.value,max) && this.validate(root.left,min,root.value)
//     }

//     maxDepth(root){
//         if(root === null){
//             return 0
//         }
//         let leftHeight = this.maxDepth(root.left)
//         let rightHeight = this.maxDepth(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     secondLargest(root){
//         if(root === null){
//             return null
//         }
//         let parent = null
//         let curr = root
//         while(curr){
//             parent = curr
//             curr = curr.right
//         }

//         if(curr.left){
//             return this.max(curr.left)
//         }

//         return parent.value
//     }

//     closest(target){
//         let curr = this.root
//         let close = Infinity
//         while(curr){
//             if(Math.abs(curr.value - target) < Math.abs(close - target)){
//                 close = curr.value
//             }
//             if(curr.value < target){
//                 curr = curr.left
//             }else if(curr.value > target){
//                 curr = curr.right
//             }else{
//                 return curr.value
//             }
//             return close
//         }
//     }

//     balanced(root){
//         return isBalaced(root) !== -1
//     }

//     isBalaced(root){
//         if(root === null){
//             return 0
//         }
//         let leftHeight = this.isBalaced(root.left)
//         if(leftHeight === -1){
//             return -1
//         }

//         let rightHeight = this.isBalaced(root.right)
//         if(rightHeight === -1){
//             return -1
//         }

//         if(Math.abs(rightHeight-leftHeight) > 1){
//             return -1
//         }

//         return Math.max(rightHeight,leftHeight) + 1
//     }
// }


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftIndex(i){
//         return (2 * i) + 1
//     }

//     getRightIndex(i){
//         return (2 * i) + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length - 1)
//     }

//     heapifyUp(index){
//         let parent = this.getParentIndex(index)
//         while(index > 0 && this.heap[parent] > this.heap[index]){
//             this.swap(index,parent)
//             index = parent
//             parent = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()
//         let removed = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return removed
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[smallest] > this.heap[leftIndex]){
//             smallest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[smallest] > this.heap[rightIndex]){
//             smallest = rightIndex
//         }
//         if(smallest !== index){
//             this.swap(smallest,index)
//             this.heapifyDown(smallest)
//         }
//     }

//     heapSort(arr){
//         let MinHeap = new MinHeap()
//         let sorted = []
//         for(let val of arr){
//             MinHeap.insert(val)
//         }
//         while(MinHeap.heap.length > 0){
//             sorted.push(MinHeap.remove())
//         }
//         return sorted
//     }
// }


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex2]?.has(vertex1) && this.adjacencyList[vertex1]?.has(vertex2)
//         )
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     removeVertex(vertex){
//         if(this.adjacencyList[vertex]){
//             for(let adjacencyVertex of this.adjacencyList[vertex]){
//                 this.removeEdge(vertex,adjacencyVertex)
//             }
//             delete this.adjacencyList[vertex]
//         }
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.adjacencyList[vertex2].delete(vertex1)
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//         }
//     }

//     dfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let stack = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(stack.length){
//             let currVertex = stack.pop()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     stack.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }

//     bfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let queue = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(queue.length){
//             let currVertex = queue.shift()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
// }


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(root === null){
//             return false
//         }else{
//             if(root.value === value){
//                 return false
//             }else if(root.value < value){
//                 this.search(root.right,value)
//             }else{
//                 this.search(root.left,value)
//             }
//         }
//     }

//     // dfs
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(root){
//         if(!root){
//             return []
//         }
//         let queue = []
//         queue.push(root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
    
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return root
//         }
//         if(root.value > value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(root.value < value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.right && !root.left){
//                 return null
//             }
//             if(!root.right){
//                 return root.left
//             }else if(!root.left){
//                 return root.right
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }

//     maxDepth(root){
//         if(!root){
//             return 0
//         }
//         let leftHeight = this.maxDepth(root.left)
//         let rightHeight = this.maxDepth(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     isValidBST(){
//         return this.validate(this.root,-Infinity,Infinity)
//     }

//     validate(root,min,max){
//         if(root === null) return true
//         if(root.value <= min || root.value >= max) return false
//         return this.validate(root.left,min,root.value) && this.validate(root.right,root.value,max)
//     }

//     secondLargest(root){
//         if(!root){
//             return null
//         }
//         let curr = root
//         let parent = null
//         while(curr.right){
//             parent = curr
//             curr = curr.right
//         }
//         if(curr.left){
//             return this.max(curr.left)
//         }
//         return parent? parent.value : null
//     }

//     closest(target){
//         let curr = this.root
//         let close = Infinity
//         while(curr){
//             if(Math.abs(curr.value - target) < Math.abs(close - target)){
//                 close = curr.value
//             }
//             if(curr.value > target){
//                 curr = curr.left
//             }else if(curr.value < target){
//                 curr = curr.right
//             }else{
//                 return curr.value
//             }
//         }
//         return close
//     }

//     isBalanced(root){
//         return this.balance(root) !== -1
//     }

//     balance(root){
//         if(!root){
//             return 0
//         }
//         let leftHeight = this.balance(root.left)
//         if(leftHeight === -1) return -1
//         let rightHeight = this.balance(root.right)
//         if(rightHeight === -1) return -1
//         if(Math.abs(leftHeight - rightHeight) > 1) return -1
//         return Math.max(leftHeight,rightHeight) + 1
//     }
// }

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeVertex(vertex){
//         if(this.adjacencyList[vertex]){
//             for(let values of this.adjacencyList[vertex]){
//                 this.removeEdge(vertex,values)
//             }
//             delete this.adjacencyList[vertex]
//         }
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.adjacencyList[vertex2].delete(vertex1)
//         }
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//         }
//     }

//     dfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return null
//         }
//         let result = []
//         let stack = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(stack.length){
//             let currVertex = stack.pop()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     stack.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }

//     bfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let queue = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(queue.length){
//             let currVertex = queue.shift()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
// }


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftIndex(i){
//         return (2 * i) + 1
//     }

//     getRightIndex(i){
//         return (2 * i) + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] > this.heap[index]){
//             this.swap(index,parentIndex)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()
//         let removed = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return removed
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
//             smallest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]){
//             smallest = rightIndex
//         }
//         if(smallest !== index){
//             this.swap(smallest,index)
//             this.heapifyDown(smallest)
//         }
//     }

//     heapSort(arr){
//         let result = []
//         let MinHeap = new MinHeap()
//         for(let val of arr){
//             MinHeap.insert(val)
//         }
//         while(MinHeap.heap.length > 0){
//             result.push(MinHeap.remove())
//         }
//         return result
//     }
// }


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let curr = this.root
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.endWord = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let keys = Object.keys(curr.children)
//             if(keys.length !== 1 || curr.endWord) break
//             let char = keys[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectAllwords(prefix,curr,words = []){
//         if(curr.endWord){
//             words.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectAllwords(prefix + key,curr.children[key],words)
//         }
//         return words
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return 'Not found'
//             }
//             curr = curr.children[val]
//         }
//         return this.collectAllwords(prefix,curr)
//     }

//     search(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return false
//             }
//             curr = curr.children[val]
//         }
//         return curr.endWord
//     }
// }


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let curr = this.root
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.endWord = true
//         return word
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let keys = Object.keys(curr.children)
//             if(keys.length !== 1 || curr.endWord) break
//             let char = keys[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     search(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return false
//             }
//             curr = curr.children[val]
//         }
//         return curr.endWord
//     }

//     collectedWords(prefix,curr,words = []){
//         if(curr.endWord){
//             words.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectedWords(prefix + key,curr.children[key],words)
//         }
//         return words
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         for(let val of prefix){
//             if(!curr.children[val]){
//                 return 'No words found!'
//             }
//             curr = curr.children[val]
//         }
//         return this.collectedWords(prefix,curr)
//     }
// }


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftIndex(i){
//         return (2 * i) + 1
//     }

//     getRightIndex(i){
//         return (2 * i) + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] > this.heap[index]){
//             this.swap(parentIndex,index)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     delete(){
//         if(this.heap.length === 0) return undefined
//         if(this.heap.length === 1) return this.heap.pop()
//         let removed = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return removed
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
//             smallest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]){
//             smallest = rightIndex
//         }
//         if(smallest !== index){
//             this.swap(smallest,index)
//             this.heapifyDown(smallest)
//         }
//     }

//     heapSort(arr){
//         let MinHeap = new MinHeap()
//         let result = []
//         for(let val of arr){
//             MinHeap.insert(val)
//         }
//         while(MinHeap.heap.length > 0){
//             result.push(MinHeap.delete())
//         }
//         return result
//     }
// }


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i - 1)/2)
//     }

//     getLeftIndex(i){
//         return (2 * i) + 1
//     }

//     getRightIndex(i){
//         return (2 * i) + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//         return value
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] > this.heap[index]){
//             this.swap(parentIndex,index)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return undefined
//         if(this.heap.length === 1) return this.heap.pop()
//         let removed = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return removed
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
//             smallest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]){
//             smallest = rightIndex
//         }
//         if(smallest !== index){
//             this.swap(smallest,index)
//             this.heapifyDown(smallest)
//         }
//     }

//     heapSort(arr){
//         let MinHeap = new MinHeap()
//         let sorted = []
//         for(let val of arr){
//             MinHeap.insert(val)
//         }
//         while(MinHeap.heap.length > 0){
//             sorted.push(MinHeap.remove())
//         }
//         return sorted
//     }
// }


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1)
//         )
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//     }

//     removeVertex(vertex){
//         if(this.adjacencyList[vertex]){
//             for(let adjacencyVertex of this.adjacencyList[vertex]){
//                 this.removeEdge(vertex,adjacencyVertex)
//             }
//             delete this.adjacencyList[vertex]
//         }
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//         }
//     }

//     dfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let stack = [startVertex]
//         let visited = new Set()
//         while(stack.length > 0){
//             let currVertex = stack.pop()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     stack.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }

//     bfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let queue = [startVertex]
//         let visited = new Set()
//         while(queue.length > 0){
//             let currVertex = queue.shift()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
// }

// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value < newNode.value){
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }else{
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(root === null){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(root.value > value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     //DFS
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     //BFS
//     levelOrder(root){
//         if(!root){
//             return []
//         }else{
//             let queue = []
//             queue.push(root)
//             while(queue.length > 0){
//                 let curr = queue.shift()
//                 console.log(curr.value)
//                 if(curr.left){
//                     queue.push(curr.left)
//                 }
//                 if(curr.right){
//                     queue.push(curr.right)
//                 }
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.min(root.right)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return root
//         }else{
//             if(root.value > value){
//                 root.right = this.deleteNode(root.right,value)
//             }else if(root.value < value){
//                 root.left = this.deleteNode(root.left,value)
//             }else{
//                 if(!root.left && !root.right){
//                     return null
//                 }
//                 if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }
//                 root.value = this.min(root.right)
//                 root.right = this.deleteNode(root.right,root.value)
//             }
//         }
//     }

//     isValidBST(){
//         return validate(this.root,-Infinity,Infinity)
//     }

//     validate(root,min,max){
//         if(!root) return true
//         if(root.value <= min || root.value >= max) return false
//         return (this.validate(root.left,min,root.value) && this.validate(root.right,root.value,max))
//     }

//     maxDepth(root){
//         if(root === null) return 0
//         let leftHeight = this.maxDepth(root.left)
//         let rightHeight = this.maxDepth(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     secondLargest(root){
//         if(root === null){
//             return undefined
//         }
//         let curr = root 
//         let parent = null
//         while(curr.right){
//             parent = curr
//             curr = curr.right
//         }
//         if(curr.left){
//             return this.max(curr.left)
//         }
//         return parent.value
//     }

//     closest(target){
//         let curr = this.root
//         let close = Infinity
//         while(curr){
//             if(Math.abs(curr.value - target) < Math.abs(close - target)){
//                 close = curr.value
//             }
//             if(curr.value < target){
//                 curr = curr.right
//             }else if(curr.value > target){
//                 curr = curr.left
//             }else{
//                 return curr.value
//             }
//         }
//         return close
//     }

//     isBalanced(root){
//         return balance(root) !== -1
//     }
    
//     balance(root){
//         if(!root) return 0
//         let leftHeight = this.balance(root.left)
//         if(leftHeight === -1) return -1
//         let rightHeight = this.balance(root.right)
//         if(rightHeight === -1) return -1
//         if(Math.abs(rightHeight - leftHeight) > 1) return -1
//         return Math.max(rightHeight,leftHeight) + 1
//     }
// }


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.adjacencyList[vertex2].delete(vertex1)
//         }
//     }

//     removeVertex(vertex){
//         if(this.adjacencyList[vertex]){
//             for(let adjacencyVertex of this.adjacencyList[vertex]){
//                 this.removeEdge(adjacencyVertex,vertex)
//             }
//             delete this.adjacencyList[vertex]
//         }
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//         }
//     }

//     bfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let queue = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(queue.length > 0){
//             let currVertex = queue.shift()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[neighbor]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }

//     dfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let stack = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(stack.length > 0){
//             let currVertex = stack.pop()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[neighbor]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     stack.push(neighbor)
//                 }
//             }
//         }
//         return stack
//     }
// }


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftIndex(i){
//         return (2 * i) + 1
//     }

//     getRightIndex(i){
//         return (2 * i) + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] < this.heap[index]){
//             this.swap(index,parentIndex)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return undefined
//         if(this.heap.length === 1) return this.heap.pop()
//         let removed = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return removed
//     }

//     heapifyDown(index){
//         let biggest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[biggest]){
//             biggest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[biggest]){
//             biggest = rightIndex
//         }
//         if(biggest !== index){
//             this.swap(biggest,index)
//             this.heapifyDown(biggest)
//         }
//     }

//     heapSort(arr){
//         let maxheap = new MaxHeap()
//         let sorted = []
//         for(let val of arr){
//             maxheap.insert(val)
//         }
//         while(maxheap.heap.length > 0){
//             sorted.push(maxheap.remove())
//         }
//         return sorted
//     }
// }



// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let curr = this.root
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.endWord = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let keys = Object.keys(curr.children)
//             if(keys.length !== 1 || curr.endWord) break
//             let char = keys[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectedWords(prefix,curr,words = []){
//         if(curr.endWord){
//             words.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectedWords(prefix + key,curr.children[key],key)
//         }
//         return words
//     }
    
//     autoComplete(prefix){
//         let curr = this.root
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return 'No Words Found!'
//             }
//             curr = curr.children[char]
//         }
//         return this.collectedWords(prefix,curr)
//     }

//     search(prefix){
//         let curr = this.root
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return false
//             }
//             curr = curr.children[char]
//         }
//         return curr.endWord
//     }
// }




// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWords = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let curr = this.root
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.endWords = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let keys = Object.keys(curr.children)
//             if(keys.length !== 1 || curr.endWords) break
//             let char = keys[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectedWords(prefix,curr,words = []){
//         if(curr.endWords){
//             words.push(prefix)
//         }
//         for(let key in curr.children){
//             this.collectedWords(prefix + key,curr.children[key],words)
//         }
//         return words
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return 'No Words Found!'
//             }
//             curr = curr.children[char]
//         }
//         return this.collectedWords(prefix,curr)
//     }

//     search(prefix){
//         let curr = this.root
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return false
//             }
//             curr = curr.children[char]
//         }
//         return curr.endWords
//     }
// }



// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftIndex(i){
//         return (2 * i) + 1
//     }

//     getRightIndex(i){
//         return (2 * i) + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] > this.heap[index]){
//             this.swap(parentIndex,index)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return undefined
//         if(this.heap.length === 1) return this.heap.pop()
//         let removed = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return removed
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[smallest] > this.heap[leftIndex]){
//             smallest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[smallest] > this.heap[rightIndex]){
//             smallest = rightIndex
//         }
//         if(smallest !== index){
//             this.swap(smallest,index)
//             this.heapifyDown(smallest)
//         }
//     }

//     heapSort(arr){
//         let minHeap = new MinHeap()
//         let sorted = []
//         for(let val of arr){
//             minHeap.insert(val)
//         }
//         while(minHeap.heap.length > 0){
//             sorted.push(minHeap.remove())
//         }
//         return sorted
//     }
// }

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.adjacencyList[vertex2].delete(vertex1)
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 'Vertex not exists'
//         }
//         for(let adjacencyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacencyVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     dfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let stack = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(stack.length > 0){
//             let currVertex = stack.pop()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     stack.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }

//     bfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let queue = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(queue.length > 0){
//             let currVertex = queue.shift()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
// }


// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     //DFS
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     //BFS
//     levelOrder(){
//         if(this.root === null) return []
//         let curr = this.root
//         let queue = []
//         queue.push(curr)
//         while(queue.length){
//             let val = queue.shift()
//             console.log(val)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(root.value > value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     deleteNode(root,value){
//         if(!root) return null
//         if(root.value > value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(root.value < value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.right){
//                 return root.left
//             }else if(!root.left){
//                 return root.right
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//     }

//     isValid(){
//         const validate = (root,min,max) => {
//             if(!root) return true
//             if(root.value <= min || root.value >= max) return false
//             return validate(root.left,min,root.value) && validate(root.right,root.value,max)
//         }
//         return validate(this.root,-Infinity,Infinity)
//     }

//     maxDepth(root){
//         if(!root) return 0
//         let leftHeight = this.maxDepth(root.left)
//         let rightHeight = this.maxDepth(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     closest(target){
//         let curr = this.root
//         let close = Infinity
//         while(curr){
//             if(Math.abs(curr.value - target) < Math.abs(close - target)){
//                 close = curr.value
//             }
//             if(curr.value > target){
//                 curr = curr.left
//             }else if(curr.value < target){
//                 curr = curr.right
//             }else{
//                 return curr.value
//             }
//         }
//         return close
//     }

    
// }


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1)
//         )
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(this.adjacencyList[vertex1]){
//             this.adjacencyList[vertex1].delete(vertex2)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.adjacencyList[vertex2].delete(vertex1)
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacencyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacencyVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//         }
//     }

//     dfs(startVertex){
//         if(!this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let stack = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(stack.length > 0){
//             let currVertex = stack.pop()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     stack.push(neighbor)
//                     visited.add(neighbor)
//                 }
//             }
//         }
//         return result
//     }

//     bfs(startVertex){
//         if(this.adjacencyList[startVertex]){
//             return []
//         }
//         let result = []
//         let queue = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)
//         while(queue.length > 0){
//             let currVertex = queue.shift()
//             result.push(currVertex)
//             for(let neighbor of this.adjacencyList[currVertex]){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
// }


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftIndex(i){
//         return 2 * i + 1
//     }

//     getRightIndex(i){
//         return 2 * i + 2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let parentIndex = this.getParentIndex(index)
//         while(index > 0 && this.heap[parentIndex] < this.heap[index]){
//             this.swap(index,parentIndex)
//             index = parentIndex
//             parentIndex = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()
//         let remove = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return remove
//     }

//     heapifyDown(index){
//         let biggest = index
//         let leftIndex = this.getLeftIndex(index)
//         let rightIndex = this.getRightIndex(index)
//         if(leftIndex < this.heap.length && this.heap[biggest] < this.heap[leftIndex]){
//             biggest = leftIndex
//         }
//         if(rightIndex < this.heap.length && this.heap[biggest] < this.heap[rightIndex]){
//             biggest = rightIndex
//         }
//         if(biggest !== index){
//             this.swap(index,biggest)
//             this.heapifyDown(biggest)
//         }
//     }

//     heapSort(arr){
//         let maxheap = new MaxHeap()
//         let sorted = []
//         for(let val of arr){
//             maxheap.insert(val)
//         }
//         while(maxheap.heap.length > 0){
//             sorted.push(maxHeap.remove())
//         }
//         return sorted
//     }
// }


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     isEmpty(){
//         return Object.keys(this.root.children).length === 0
//     }

//     insert(word){
//         let curr = this.root
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.endWord = true
//     }

//     longestPrefix(){
//         let curr = this.root
//         let prefix = ''
//         while(curr){
//             let keys = Object.keys(curr.children)
//             if(keys.length !== 1 || curr.endWord) break
//             let char = keys[0]
//             prefix += char
//             curr = curr.children[char]
//         }
//         return prefix
//     }

//     collectedWords(prefix,curr,words = []){
//         if(curr.endWord){
//             words.push(prefix)
//         }
//         for(let keys in curr.children){
//             this.collectedWords(prefix + keys,curr.children[keys],words)
//         }
//         return words
//     }

//     autoComplete(prefix){
//         let curr = this.root
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return 'No Values Found!'
//             }
//             curr = curr.children[char]
//         }
//         return this.collectedWords(prefix,curr)
//     }

//     search(word){
//         let curr = this.root
//         for(let char of word){
//             if(!curr.children[char]){
//                 return false
//             }
//             curr = curr.children[char]
//         }
//         return curr.endWord
//     }
// }


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value < newNode.value){
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }else{
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }
//     }

//     closest(target){
//         let curr = this.root
//         let close = Infinity
//         while(curr){
//             if(Math.abs(curr.value - target) < Math.abs(close - target)){
//                 close = curr.value
//             }
//             if(curr.value < target){
//                 curr = curr.right
//             }else if(curr.value > target){
//                 curr = curr.left
//             }else{
//                 return curr.value
//             }
//         }
//         return close
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root = deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }
//         if(root.value > value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(root.value < value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//     }

//     //DFS
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     //BFS
//     levelOrder(root){
//         if(!root) return []
//         let queue = []
//         queue.push(root)
//         while(queue.length > 0){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     maxDepth(root){
//         if(!root){
//             return 0
//         }
//         let leftHeight = this.maxDepth(root.left)
//         let rightHeight = this.maxDepth(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     isValid(){
//         const validate = (root,min,max) =>{
//             if(!root) return true
//             if(root.value <= min || root.value >= max) return false
//             return (validate(root.left,min,root.value) && validate(root.right,root.value,root.value))
//         }
//         return validate(this.root,-Infinity,Infinity)
//     }

//     secondLargest(){
//         if(!root) return null
//         let curr = root
//         let parent = null
//         while(curr.right){
//             parent = curr
//             curr = curr.right
//         }
//         if(curr.left) return this.max(curr.left)
//         return parent.value
//     }

//     balanced(root){
//         return this.isBalaced(root) !== -1
//     }

//     isBalaced(root){
//         if(!root) return null
//         let leftHeight = this.isBalaced(root.left)
//         if(leftHeight === -1) return -1
//         let rightHeight = this.isBalaced(root.right)
//         if(rightHeight === -1) return -1
//         if(Math.abs(leftHeight-rightHeight) > 1) return -1
//         return Math.max(rightHeight,leftHeight) + 1
//     }
// }


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     //DFS
//     preOrder(root){
//         if(root){
//             console(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     //BFS
//     levelOrder(root){
//         if(!root) return []
//         let queue = []
//         queue.push(root)
//         while(queue.length > 0){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return max(root.right)
//         }
//     }

//     maxDepth(root){
//         if(!root) return 0
//         let leftHeight = this.maxDepth(root.left)
//         let rightHeight = this.maxDepth(root.right)
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     isValid(){
//         const validate = (root,min,max)=>{
//             if(!root) return true
//             if(root.value <= min || root.value >= max) return false
//             return (validate(root.right,root.value,max) && validate(root.left,min,root.value))
//         }
//         return validate(this.root,-Infinity,Infinity)
//     }

//     isBalanced(){
//         return this.balance(this.root) !== -1
//     }

//     balance(root){
//         if(!root) return 0
//         let leftHeight = this.balance(root.left)
//         if(leftHeight === -1) return -1
//         let rightHeight = this.balance(root.right)
//         if(rightHeight === -1) return -1
//         if(Math.abs(leftHeight-rightHeight) > 1) return -1
//         return Math.max(leftHeight,rightHeight) + 1
//     }

//     secondLargest(root){
//         if(!root) return null
//         let curr = root
//         let parent = null
//         while(curr.right){
//             parent = curr
//             curr = curr.right
//         }
//         if(curr.left){
//             return this.max(curr.left)
//         }
//         return parent.value
//     }

//     closest(target){
//         let curr = this.root
//         let close = Infinity
//         while(curr){
//             if(Math.abs(curr.value - target) < Math.abs(close - target)){
//                 close = curr.value
//             }
//             if(curr.value < value){
//                 curr = curr.right
//             }else if(curr.value > value){
//                 curr = curr.left
//             }else{
//                 return curr.value
//             }
//         }
//         return close
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root) return null
//         if(root.value < value){
//             root.right = this.deleteNode(root.right,value)
//         }else if(root.value > value){
//             root.left = this.deleteNode(root.left,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }