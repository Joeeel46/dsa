// // class collition{
// //     constructor(size){
// //         this.table = new Array(size)
// //         this.size = size
// //     }

// //     hash(key){
// //         key = typeof(key) === 'string'? key : key.toStirng()
// //         let total = 0
// //         for(let i = 0;i < key.length;i++){
// //             total += key.charCodeAt(i)
// //         }
// //         return total % this.size
// //     }

// //     get(key){
// //         let index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(bucket){
// //             let sameKeyItem = bucket.find(item => item[0] === key)
// //             if(sameKeyItem){
// //                 return sameKeyItem[1]
// //             }
// //         }
// //         return 'not found'
// //     }

// //     set(key,value){
// //         let index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(!bucket){
// //             this.table[index] = [[key,value]]
// //         }else{
// //             const sameKeyItem = bucket.find(item => item[0] === key)
// //             if(sameKeyItem){
// //                 return sameKeyItem[1] = value
// //             }else{
// //                 return bucket.push([key,value])
// //             }
// //         }
// //     }

// //     remove(key){
// //         let index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(bucket){
// //             let sameKeyIndex = bucket.findIndex(item => item[0] === key)
// //             if(sameKeyIndex){
// //                 return bucket.splice(sameKeyIndex,1)
// //             }
// //         }
// //         return 'not found'
// //     }

// //     display(){
// //         for(let i = 0;i < this.table.length;i++){
// //             if(this.table[i]) console.log(i,this.table[i])
// //         }
// //     }
// // }


// // const table = new collition(50)

// // table.set("name","Joel")
// // table.set("age",19)
// // table.display()


// // console.log(table.get('name'))

// // // table.remove("name")
// // table.set("mane","John")
// // table.set("lane","diana")
// // table.remove("name")
// // table.display()


// class LinearProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         key = typeof(key) === 'string' ? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] && this.table[index][0] !== key){
//             index = (index + 1) % this.size
//         }
//         this.table[index] = [key,value]
//     }

//     get(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 return this.table[index][1]
//             }
//             index = (index + 1) % this.size
//         }
//         return 'not foud'
//     }

//     remove(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 const val = this.table[index]
//                 this.table[index] = null
//                 return val
//             }
//             index = (index + 1) % this.size
//         }
//         return 'not found'
//     }

//     display(){
//         for(let i = 0;i < this.table.length;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }

    
// }



// const table = new LinearProbing(10);
// table.set("name", "joel");
// table.set("mane", "john");

// table.display() // Print the table to check key-value pairs
// console.log(table.get("name")); // Output: sahal
// console.log(table.get("mane")); // Output: messi
// table.remove('mane')
// console.log(table.get("unknown")); // Output: undefined
// table.display()

// class QuadraticProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         key = typeof(key) === 'string' ? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         let i = 0
//         while(this.table[(index + i * i) % this.size] && this.table[(index + i * i) % this.size][0] !== key){
//             i++
//             if(i === this.size) return
//         }
//         this.table[(index + i * i) % this.size] = [key,value]
//     }

//     get(key){
//         let index = this.hash(key)
//         let i = 0
//         while(this.table[(index + i * i) % this.size]){
//             if(this.table[(index + i * i) % this.size][0] === key){
//                 return this.table[(index + i * i) % this.size][1]
//             }
//             i++
//             if(i === this.size) break
//         }
//         return 'not found'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let i = 0
//         while(this.table[(index + i * i) % this.size]){
//             if(this.table[(index + i * i) % this.size][0] === key){
//                 const val = this.table[(index + i * i) % this.size]
//                 this.table[(index + i * i) % this.size] = null
//                 return val
//             }
//             i++
//             if(i === this.size) break
//         }
//         return 'not dfound'
//     }

//     display(){
//         for(let i = 0;i < this.table.length;i++){
//             if(this.table[i]) console.log(i, this.table[i])
//         }
//     }
// }

// const table = new QuadraticProbing(10);
// table.set("name", "joel");
// table.set("mane", "john");

// table.display() // Print the table to check key-value pairs
// console.log(table.get("name")); // Output: sahal
// console.log(table.get("mane")); // Output: messi
// table.remove('mane')
// console.log(table.get("unknown")); // Output: undefined
// table.display()


// class LinearProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         key = typeof(key) === 'string'? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] && this.table[index][0] !== key){
//             index = (index + 1) % this.size
//         }
//         this.table[index] = [key,value]
//     }

//     get(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 return this.table[index][1]
//             }
//             index = (index + 1) % this.size
//         }
//         return 'invalid key'
//     }

//     remove(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 const value = this.table[index]
//                 this.table[index] = undefined
//                 return value
//             }
//             index = (index + 1) % this.size
//         }
//         return 'invalid key'
//     }

//     display(){
//         for(let i = 0;i < this.size;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }
// }



// const table = new LinearProbing(10);
// table.set("name", "joel");
// table.set("mane", "john");

// table.display() // Print the table to check key-value pairs
// console.log(table.get("name")); // Output: sahal
// console.log(table.get("mane")); // Output: messi
// table.remove('mane')
// console.log(table.get("unknown")); // Output: undefined
// table.display()



// class CollitionHandling{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         key = typeof(key) === 'string'? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket) {
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1] = value
//             }else{
//                 return bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return 'invalid key'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyIndex = bucket.findIndex(item => item[0] === key)
//             if(sameKeyIndex !== -1){
//                 return bucket.splice(sameKeyIndex,1)
//             }
//         }
//         return 'invalid key'
//     }

//     display(){
//         for(let i = 0;i < this.size;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }
// }


// const table = new CollitionHandling(50)

// table.set("name","Joel")
// table.set("age",19)
// table.display()


// console.log(table.get('name'))

// // table.remove("name")
// table.set("mane","John")
// table.set("lane","diana")
// table.remove("name")
// table.display()


// class LoadFactor{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//         this.count = 0
//     }

//     resize(){
//         let oldTable = this.table
//         this.size *= 2
//         this.count = 0
//         this.table = new Array(this.size)

//         for(let bucket of oldTable){
//             if(bucket){
//                 for(let [key,value] of oldTable){
//                     this.set(key,value)
//                 }
//             }
//         }
//     }

//     hash(key){
//         key = typeof(key) === 'string' ? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         if(this.count / this.size > 0.7){
//             this.resize()
//         }
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//             this.count++
//         }else{
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//                 this.count++
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return 'invalid key'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             const sameKeyIndex = bucket.findIndex(item => item[0] === key)
//             if(sameKeyIndex !== -1){
//                 this.count--
//                 return bucket.splice(sameKeyIndex,1)
//             }
//         }
//         return 'invalid key'
//     }

//     display(){
//         for(let i = 0;i < this.size;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }
// }

// const table = new LoadFactor(10);
// table.set(1, "sahal");
// table.set(2, "messi");
// table.set(3, "bruce");
// table.set(4, "cristiano");
// table.set(5, "tommy");
// table.set(6, "shelby");
// table.set(7, "cillian");
// table.set(8, "romero");

// console.log("Total Elements:", table.count);
// table.display();



// class CollitionHandling{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     isEmpty(){
//         return this.table.length === 0
//     }

//     hash(key){
//         key = typeof(key) === 'string' ? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1] = value
//             }else{
//                 return bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return 'Invalid key'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             const sameKeyIndex = bucket.findIndex(item => item[0] === key)
//             if(sameKeyIndex !== -1){
//                 return bucket.splice(sameKeyIndex,1)
//             }
//         }
//         return 'Invalid key'
//     }

//     display(){  
//         for(let i = 0;i < this.table.length;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }
// }



// const table = new CollitionHandling(50)

// table.set("name","Joel")
// table.set("age",19)
// table.display()


// console.log(table.get('name'))

// // table.remove("name")
// table.set("mane","John")
// table.set("lane","diana")
// table.remove("name")
// table.display()


// class LinearProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     hash(key){
//         key = typeof(key) === 'string'? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     get(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 return this.table[index][1]
//             }
//             index = (index + 1) % this.size
//         }
//         return 'invalid key'
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] && this.table[index][0] !== key){
//             index = (index + 1) % this.size
//         }
//         return this.table[index] = [key,value]
//     }

//     remove(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 return this.table[index] = undefined
//             }
//             index = (index + 1) % this.size
//         }
//         return 'Invalid key'
//     }

//     display(){
//         for(let i = 0;i < this.table.length;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }
// }

// const table = new LinearProbing(10);
// table.set("name", "joel");
// table.set("mane", "john");

// table.display() // Print the table to check key-value pairs
// console.log(table.get("name")); // Output: sahal
// console.log(table.get("mane")); // Output: messi
// table.remove('mane')
// console.log(table.get("unknown")); // Output: undefined
// table.display()


// class QuadraticProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         key = typeof(key) === 'string'? key : key.toString()
//         let total = 0
//         for(let i = 0;i < key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         let i = 0
//         while(this.table[(index + i * i) % this.size] && this.table[(index + i * i) % this.size][0] !== key){
//             i++
//             if(this.size === i) return
//         }
//         return this.table[(index + i * i) % this.size] = [key,value]
//     }

//     get(key){
//         let index = this.hash(key)
//         let i = 0
//         while(this.table[(index + i * i) % this.size]){
//             if(this.table[(index + i * i) % this.size][0] === key){
//                 return this.table[(index + i * i) % this.size][1]
//             }
//             i++
//             if(this.size === i) return "indvalid key"
//         }
//     }

//     remove(key){
//         let index = this.hash(key)
//         let i = 0
//         while(this.table[(index + i * i) % this.size]){
//             if(this.table[(index + i * i) % this.size][0] === key){
//                 return this.table[(index + i * i) % this.size] = undefined
//             }
//             i++
//             if(this.size === i) return 'Invalid key'
//         }
//     }

//     display(){
//         for(let i = 0;i < this.table.length;i++){
//             if(this.table[i]) console.log(i,this.table[i])
//         }
//     }
// }


// const table = new QuadraticProbing(10);
// table.set("name", "joel");
// table.set("mane", "john");

// table.display() // Print the table to check key-value pairs
// console.log(table.get("name")); // Output: sahal
// console.log(table.get("mane")); // Output: messi
// table.remove('mane')
// console.log(table.get("unknown")); // Output: undefined
// table.display()



class LoadFactor{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
    }

    resize(){
        let oldTable = this.table
        this.size *= 2
        this.count = 0
        this.table = new Array(this.size)

        for(let bucket of oldTable){
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value)
                }
            }
        }
    }

    hash(key){
        key = typeof(key) === 'string'? key : key.toString()
        let total = 0
        for(let i = 0;i < key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        if(this.count / this.size > 0.7) {
            this.resize()
        }
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
            this.count++
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1] = value
            }else{
                this.count++
                return bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return 'invalid key'
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            const sameKeyIndex = bucket.findIndex(item => item[0] === key)
            if(sameKeyIndex !== -1){
                return bucket.splice(sameKeyIndex,1)
            }
        }
        return 'invalid key'
    }

    display(){
        for(let i = 0;i < this.table.length;i++){
            if(this.table[i]) console.log(i ,this.table[i])
        }
    }
}



const table = new LoadFactor(10);
table.set(1, "sahal");
table.set(2, "messi");
table.set(3, "bruce");
table.set(4, "cristiano");
table.set(5, "tommy");
table.set(6, "shelby");
table.set(7, "cillian");
table.set(8, "romero");

console.log("Total Elements:", table.count);
table.display();
