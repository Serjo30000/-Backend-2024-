const funCheckStaples = require('./funCheckStaples')

const str = "{{()[]{(){[]()}}}()}()[]{()[]}"

const resCheckStaples = funCheckStaples(str)

console.log(resCheckStaples)