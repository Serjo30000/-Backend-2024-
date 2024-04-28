const funMapWords = require('./funMapWords')

const path = './txt1.txt'

funMapWords(path)
    .then((fileData) => {
        console.log('Отсортированные слова по их частоте по убыванию:', fileData)
    })
    .catch((err) => {
        console.error('Ошибка чтения файла:', err)
    })