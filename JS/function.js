// 
function add(n1=1, n2=2){
    return n1 + n2
}

console.log(add())
console.log(add(2,7))
// =을 통해 default
console.log(add(2,3,5,6,7))
// 매개변수보다 인자가 많아도 가능 2개만 받아서 실행

const diff = function(n1, n2) {
    return n1 - n2
}

console.log(diff(9,7))
console.log(diff(10)) // NaN 10 - undefine
// 매개 변수 보다 인자가 적어도 가능

// spread syntax

let part = ['s','k']
let lyrics = ['head', ...part, 'and', 'toes']
console.log(lyrics)

// array method
console.log(part.reverse()) // ['k','s']
part.push('g')
console.log(part) // ['k','s','g']
part.pop() // ['k', 's']
part.unshift('a') // ['a', 's', 'k']
console.log(part)
console.log(part.join('')) // aks
// arrow function

const func = (name) => {
    return `hello, ${name}`
}