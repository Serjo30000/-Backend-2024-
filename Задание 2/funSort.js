function funSort(arrA, arrB){
    const mapB = new Map()
    const lastArr = []
    let finalArr = []

    for (let i = 0; i < arrB.length; i++){
        mapB.set(arrB[i], [])
    }

    for (let i = 0; i < arrA.length; i++){
        if (mapB.has(arrA[i])){
            const arrIndex = mapB.get(arrA[i]);
            arrIndex.push(arrA[i])
            mapB.set(arrA[i], arrIndex)
        }
        else{
            lastArr.push(arrA[i])
        }
    }

    lastArr.sort((a, b) => b - a);

    mapB.forEach((value) => {
        finalArr = finalArr.concat(value)
    });
    
    finalArr = finalArr.concat(lastArr)

    return finalArr
}

module.exports = funSort