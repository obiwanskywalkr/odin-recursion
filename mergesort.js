// #!/usr/bin/env node

const unsorted = [2, 10, 6, 5, 1, 7, 9, 3, 8, 4]

const mergeSort = (array) => {
    if (array.length < 2) return array

    const arrayMiddle = Math.floor(array.length / 2)
    const leftArray = array.slice(0, arrayMiddle)
    const rightArray = array.slice(arrayMiddle, array.length)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
    const output = []
    let leftIndex = 0
    let rightIndex = 0
    
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            output.push(leftArray[leftIndex])
            leftIndex++
        } else {
            output.push(rightArray[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < leftArray.length) {
        output.push(leftArray[leftIndex])
        leftIndex++
    }

    while (rightIndex < rightArray.length) {
        output.push(rightArray[rightIndex])
        rightIndex++
    }

    return output 
}

const sorted = mergeSort(unsorted)
console.log(sorted)