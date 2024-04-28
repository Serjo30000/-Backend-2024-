function funCheckStaples(str) {
    const stack = []
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const leftSteps = ['(', '{', '[']
    const rightSteps = [')', '}', ']']

    if (str.length === 0 || str[0] === ')' || str[0] === '}' || str[0] === ']'){
        return false
    }

    for (let char of str){
        if (leftSteps.includes(char)){
            stack.push(char)
        }
        else if (rightSteps.includes(char)){
            if (stack.length === 0) {
                return false
            } else if (stack[stack.length - 1] === pairs[char]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
}

module.exports = funCheckStaples