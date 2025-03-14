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
        let i = 0;
        
        // Quadratic Probing to resolve collisions
        while (this.table[(index + i * i) % this.size] && this.table[(index + i * i) % this.size][0] !== key) {
            i++;
            if (i === this.size) return; // Prevent infinite loop if table is full
        }
        
        this.table[(index + i * i) % this.size] = [key, val];
    }

    get(key) {
        let index = this.hash(key);
        let i = 0;
        
        // Quadratic probing to find the key
        while (this.table[(index + i * i) % this.size]) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                return this.table[(index + i * i) % this.size][1]; // Return the value
            }
            i++;
            if (i === this.size) break; // Avoid infinite loop
        }
        return undefined; // Key not found
    }

    remove(key) {
        let index = this.hash(key);
        let i = 0;
        
        while (this.table[(index + i * i) % this.size]) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                this.table[(index + i * i) % this.size] = null;
                return;
            }
            i++;
            if (i === this.size) break;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) console.log(i, this.table[i]);
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