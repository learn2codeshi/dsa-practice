// https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array


let arr = [1, 3, 5, 2, 4, 6, 8, 7]
let target = 10


function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[j])
            if (arr[i] + arr[j] === target) {
                return "YES"
            }
        }
    }
    return "NO"
}

console.log(twoSum(arr, target))



function twoSum2(arr, target) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]
        if (map.has(complement)) {
            return "YES"
        }
        map.set(arr[i], i);
    }
    return "NO"
}

console.log(twoSum2(arr, target))