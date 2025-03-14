// const matrix = [
//     [0,1,0],                     B
//     [1,0,1],                   /  \                 
//     [0,1,0]                   /    \
// ]                            A      C

// console.log(matrix[0][2]);


// const adjacencyList = {
//     "A":["B"],
//     "B":["A","C"],
//     "C":["B"]
// }

// console.log(adjacencyList["B"]);


// Most basic operations (add, remove, hasEdge) are O(1) in both time and space.
// Traversal algorithms (DFS, BFS) are O(V + E) for time, and O(V) for space.


class Graph{
    constructor(){
        this.adjacencyList = {}
    }
// addVertex(vertex)
// Time Complexity: O(1) → Adding a vertex takes constant time.
// Space Complexity: O(1) → A new entry in the adjacency list uses constant space.
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

//     hasEdge(vertex1, vertex2)
// Time Complexity: O(1) → Checking if two vertices are connected is a constant-time lookup in a Set.
// Space Complexity: O(1) → No additional space is used.
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1) // why is  ? used //If vertex1 doesn’t exist, it returns undefined instead of crashing, making your code more robust!
        )
    }

    // removeVertex(vertex)
    // Time Complexity: O(V) → Iterates through all adjacent vertices.
    // Space Complexity: O(1) → Deletes references, no extra space
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }

//     removeEdge(vertex1, vertex2)
// Time Complexity: O(1) → Deleting from a Set is constant time.
// Space Complexity: O(1) → No extra space used.
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1);
        }
    }

//     addEdge(vertex1, vertex2)
// Time Complexity: O(1) → Inserting elements in a Set is constant time.
// Space Complexity: O(1) → Space grows by adding 2 pointers.
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

//     display()
// Time Complexity: O(V + E) → Iterates through each vertex and its edges.
// Space Complexity: O(V) → Stores the vertex list for logging
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
        }
    }

//     dfs(startVertex) (Depth-First Search)
// Time Complexity: O(V + E) → Visits all vertices and edges.
// Space Complexity: O(V) → visited set, stack, and result array grow linearly with vertices.
    dfs(startVertex) {
        if (!this.adjacencyList[startVertex]) {
            return [];
        }
    
        let result = []; // Stores the traversal order
        let stack = [startVertex]; // Use a stack instead of recursion
        let visited = new Set(); // Track visited vertices
    
        visited.add(startVertex);
    
        while (stack.length) {
            let currVertex = stack.pop(); // Pop the last element (LIFO)
            result.push(currVertex);
    
            // Add neighbors to the stack (push unvisited ones)
            for (let neighbor of this.adjacencyList[currVertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
    
        return result;
    }

    
//     bfs(startVertex) (Breadth-First Search)
// Time Complexity: O(V + E) → Visits all vertices and edges.
// Space Complexity: O(V) → visited set, queue, and result array grow linearly with vertices.
    bfs(startVertex) {
        if (!this.adjacencyList[startVertex]) {
            return [];
        }
    
        let result = []; 
        let queue = [startVertex]; 
        let visited = new Set(); 

        visited.add(startVertex);
    
        while (queue.length) {
            let currVertex = queue.shift();
            result.push(currVertex);
    
            for (let neighbor of this.adjacencyList[currVertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('A','C')

// graph.display()
// console.log(graph.hasEdge('A','B'))
// console.log(graph.hasEdge('A','C'))
// graph.removeEdge('A','C')
// graph.removeVertex('B')
console.log(graph.bfs('A'))
console.log(graph.dfs('A'))




