
function freq(str){
    let obj = {}
    let max = 0
    let letter = ''
    str = str.split('')
    for(let val of str){
        obj[val] = (obj[val] || 0) + 1
        if(max < obj[val]){
            letter = val
            max = obj[val]
        }
    }
    return {letter,max}
}

console.log(freq("sahalll"));