function longestWordInList(words){
let longest = words[0]
for (word of words){
    if (word.length > longest.length){
        longest = word
    }
}
return longest
}


console.log(`Expect hello : ${longestWordInList(['a','b','c','hello'])}`)
