function funMaxSum(arr) {
    if (arr.length == 0){
        return 0
    }
    else if (arr.length == 1){
        return arr[0]
    }
    else{
        let maxNumber1 = Number.NEGATIVE_INFINITY
        let maxNumber2 = Number.NEGATIVE_INFINITY

        for (let i = 0; i < arr.length; i++){
            if (maxNumber1 < arr[i]){
                maxNumber2 = maxNumber1
                maxNumber1 = arr[i]
            }
            else if (maxNumber2 < arr[i]){
                maxNumber2 = arr[i]
            }
        }

        return maxNumber1 + maxNumber2
    }
    
}

module.exports = funMaxSum