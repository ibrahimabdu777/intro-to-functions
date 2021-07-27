/**
 * This function returns the longest word in a list
 * @param {Array} - the array of words 
 * @returns {string} - the longest word
 */
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
