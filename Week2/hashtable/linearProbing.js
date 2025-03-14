class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    
    set(key, val) {
        let index = this.hash(key);
        
        // Linear Probing to resolve collisions
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }
        
        this.table[index] = [key, val]; // Store key-value pair
    }

    get(key) {
        let index = this.hash(key);

        // Linear probing to find the key
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1]; // Return the value
            }
            index = (index + 1) % this.size;
        }
        return undefined; // Key not found
    }

    remove(key){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index][0] === key){
                this.table[index] = null
                return
            }
            index = (index + 1) % this.size
        }
    }

    display(){
        for(let i = 0;i < this.table.length;i++){
            if(this.table[i]) console.log(i,this.table[i])
        }
    }
}

const table = new HashTable(10);
table.set("name", "joel");
table.set("mane", "john");

table.display() // Print the table to check key-value pairs
console.log(table.get("name")); // Output: sahal
console.log(table.get("mane")); // Output: messi
table.remove('mane')
console.log(table.get("unknown")); // Output: undefined
table.display()