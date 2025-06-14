class TrieNode {
    constructor() {
        this.children = {};       // Maps characters to TrieNode
        this.EndWord = false;     // Marks end of a complete word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // ✅ Time: O(1), Space: O(1)
    isEmpty() {
        return Object.keys(this.root.children).length === 0;
    }

    // ✅ Time: O(n), Space: O(n)
    // n = length of the word
    insert(word) {
        let curr = this.root;
        for (let val of word) {
            if (!curr.children[val]) {
                curr.children[val] = new TrieNode();
            }
            curr = curr.children[val];
        }
        curr.EndWord = true;
    }

    // ✅ Time: O(m), Space: O(m)
    // m = length of the longest common prefix
    longestPrefix() {
        let curr = this.root;
        let prefix = "";

        while (curr) {
            const keys = Object.keys(curr.children);

            if (keys.length !== 1 || curr.EndWord) break;

            let char = keys[0];
            prefix += char;
            curr = curr.children[char];
        }

        return prefix;
    }

    // ✅ Time: O(k), Space: O(k)
    // k = total characters in all matching words
    collectAllWords(prefix, curr, words = []) {
        if (curr.EndWord) {
            words.push(prefix);
        }

        for (let key in curr.children) {
            this.collectAllWords(prefix + key, curr.children[key], words);
        }

        return words;
    }

    // ✅ Time: O(n + k), Space: O(k)
    // n = length of prefix, k = characters in matched words
    autoComplete(prefix) {
        let curr = this.root;

        for (let val of prefix) {
            if (!curr.children[val]) {
                return 'not found';
            }
            curr = curr.children[val];
        }

        return this.collectAllWords(prefix, curr);
    }

    // ✅ Time: O(n), Space: O(1)
    // n = length of word
    search(word) {
        let curr = this.root;

        for (let val of word) {
            if (!curr.children[val]) {
                return false;
            }
            curr = curr.children[val];
        }

        return curr.EndWord;
    }
}



const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('ape');
trie.insert('bat');
trie.insert('bake');

console.log(trie.search('app'));            // true
console.log(trie.search('appl'));           // false
console.log(trie.autoComplete('ap'));       // ['apple', 'app', 'ape']
console.log(trie.longestPrefix());          // '' (because 'apple' and 'bat' share no prefix)
