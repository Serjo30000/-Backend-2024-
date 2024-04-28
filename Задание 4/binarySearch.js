function binarySearch(arr, target){
    left = 0
    right = arr.length - 1

    while (left <= right){
        const middle = Math.floor((left + right) / 2)
        const value = arr[middle]

        if (value == target){
            return middle
        }
        else if (value < target){
            left = middle + 1
        }
        else{
            right = middle - 1
        }
    }

    return -1
}

module.exports = binarySearch