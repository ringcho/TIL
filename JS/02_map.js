const numbers = [1, 2, 3, 4, 5]
// 1
const doubleElement = function (number) {
    return number*2
}
var newArr = numbers.map(doubleElement)

console.log(newArr)

// 2

var newArr = numbers.map(function (number) {
    return number*2
})

console.log(newArr)
// 3

var newArr = numbers.map((number) => {
    return number*2
})

// 4

var newArr = numbers.map((number) => number*2)
console.log(newArr)