const fs = require('fs')

function funMapWords(path){
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(path, { encoding: 'utf8' })
        const mapWords = new Map()
        let word = ''
        const separators = ['.', ',', ';', '-', ' ', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '/', '\\', '|', '+', '=', '*', '&', '%', '#', '@', '<', '>', '~', '`', '^', '$']

        readStream.on('data', (chunk) => {
            for (let i = 0; i < chunk.length; i++){
                if (separators.includes(chunk[i]) && word != '') {
                    if (mapWords.has(word)){
                        mapWords.set(word, mapWords.get(word) + 1)
                    }
                    else{
                        mapWords.set(word, 1)
                    }
                    word = ''
                }
                else{
                    if (chunk[i] != ' '){
                        word += chunk[i]
                    }
                }
            }
        })

        readStream.on('error', (err) => {
            reject(err)
        })

        readStream.on('end', () => {
            const sortedArray = Array.from(mapWords)

            sortedArray.sort((a, b) => b[1] - a[1])

            const sortedMap = new Map(sortedArray)
            
            resolve(sortedMap)
        })
    })
}

module.exports = funMapWords