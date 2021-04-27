function mergeSort(arr) {
    const len = arr.length
    if (len <= 1) return arr
    const mid = Math.floor(len / 2)

    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    arr = mergeArr(leftArr, rightArr)

    return arr
}

function mergeArr(arr1, arr2) {
    let i = 0, j = 0
    const len1 = arr1.length
    const len2 = arr2.length
    const result = []

    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    if (i < len1) {
        return result.concat(arr1.slice(i))
    } else {
        return result.concat(arr2.slice(j))
    }
}

const array = [10, 20, 5, 43, 12, 88]
console.log('j', mergeSort(array))