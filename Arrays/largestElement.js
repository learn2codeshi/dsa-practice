let arr = [2, 45, 26, 9, 3, 12, 36]
let max = arr[0]
function largestElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(largestElement(arr))