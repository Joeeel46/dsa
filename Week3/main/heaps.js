class MinHeap{
    constructor(){
        this.heap = []
    }
    getParentindex(i){
        return Math.floor((i - 1)/2)
    }
    getleftChildIndex(i){
        return i * 2 + 1
    }
    getRightChildIndex(i){
        return i * 2 + 2 
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

// Time Complexity: O(log n) — Inserting takes constant time, but heapifyUp takes O(log n) to restore heap property.
// Space Complexity: O(1) — No extra space used beyond the input element.
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

//     Time Complexity: O(log n) — In the worst case, you might have to move up to the root, which takes log n swaps.
// Space Complexity: O(1) — No additional space is needed.
    heapifyUp(index){
        let parentIndex = this.getParentindex(index)
        while(index > 0 && this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = this.getParentindex(index)
        }
    }

//     Time Complexity: O(log n) — Removing the root and restoring the heap property via heapifyDown takes log n.
// Space Complexity: O(1) — Constant space is used.
    extractMin(){
        if(this.heap.length === 0){
            return 0
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

//     Time Complexity: O(log n) — Similar to heapifyUp, in the worst case, you might have to swap elements down to the last level.
// Space Complexity: O(1) — Constant space used.
    heapifyDown(index) {
        let smallest = index;
        let leftChildIndex = this.getleftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest)                                                          
        }
    }


// Time Complexity: O(n log n) — Inserting all elements into the heap takes O(n log n), and extracting elements to build the sorted array also takes O(n log n).
// Space Complexity: O(n) — The heap itself takes space proportional to the number of elements, and the sorted array takes up O(n) space as well.
    heapSort(arr){
        const Minheap = new MinHeap()
        let sorted = []
        for(let val of arr){
            Minheap.insert(val)
        }
        while(Minheap.heap.length > 0){
            sorted.push(Minheap.extractMin())
        }
        return sorted
    }
}

// const heap = new MinHeap()
// const arr = [6,5,34,12,7,3,98]
// console.log(heap.heapSort(arr))


// Create an instance of MinHeap
const heap = new MinHeap();

// Test insert function
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);
heap.insert(3);
heap.insert(7);

console.log("Heap after inserts:", heap.heap); 

// Test extractMin function
console.log("Extract min:", heap.extractMin()); 
console.log("Heap after extractMin:", heap.heap); 

console.log("Extract min:", heap.extractMin()); 
console.log("Heap after extractMin:", heap.heap);

// Test heapSort function
const unsortedArray = [12, 3, 9, 4, 15, 6];
const sortedArray = heap.heapSort(unsortedArray);
console.log("Sorted array:", sortedArray);

// Test edge cases
console.log("Extract min from empty heap:", heap.extractMin()); 

// Test heapifyUp and heapifyDown indirectly through insert and extractMin
heap.insert(40);
heap.insert(1);
heap.insert(25);

console.log("Heap after more inserts:", heap.heap);
console.log("Extract min:", heap.extractMin()); 
console.log("Heap after extractMin:", heap.heap);

// Everything should work as expected! Let me know if you want any modifications. 🚀
