function censorMessage(message, banList){

    const rawWords = message.split(' ')
    const scrubbedWords = []
    for (let i = 0; i < rawWords.length; i++){
        let lowercaseWord = rawWords[i].toLowerCase()
        if (banList.includes(lowercaseWord)){
            scrubbedWords.push('*****')
        } else {
            scrubbedWords.push(rawWords[i])
        }
    }
    const scrubbedMessage = scrubbedWords.join(' ')
    return scrubbedMessage
}

console.log(`${censorMessage("don't mess with cats", ["mess"])} should be "don't ***** with cats" `)