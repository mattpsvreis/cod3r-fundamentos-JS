function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Spread/Rest
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
    console.log(nums)
}

logNums(1, 2, 3, 4, 5, 6)

function sumAll(...nums) {
    let sum = 0
    for (let n of nums) {
        sum += n
    }
    return sum
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))